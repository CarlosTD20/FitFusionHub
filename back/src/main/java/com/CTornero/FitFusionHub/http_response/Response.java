package com.CTornero.FitFusionHub.http_response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.servlet.http.HttpServletRequest;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)//Ejercicio ApiRest UD2 Ejercicio 1, no muestra los NULLS
@JsonPropertyOrder({  //Ejercicio ApiRest UD2, Ejercicio 2 ordenar los datos del JSon
        "totalRecords",
        "page",
        "pageSize",
        "totalPages",
        "next",
        "previous",
        "data"
})

public class Response {

    private Object data;
    //@JsonProperty("total records") //Ejercicio ApiRest UD2, Ejercicio 3 indica cómo deberá entenderse cada atributo del json.
    private Integer totalRecords;
    private Integer page;
    @JsonProperty("page size") //Ejercicio ApiRest UD2, Ejercicio 3 indica cómo deberá entenderse cada atributo del json.
    private Integer pageSize;
    @JsonProperty("total pages")//Ejercicio ApiRest UD2, Ejercicio 3 indica cómo deberá entenderse cada atributo del json.
    private Integer totalPages;
    private String next;
    private String previous;


    @JsonIgnore
    @Value("${LIMIT}")
    private int LIMIT ;

    //Crear cconstructor con unicamente el campo data.

    public Response(Object data){
        this.data = data;
    }

    public Response(Object data, Integer totalRecords, Integer page, Integer pageSize) {
        this.data = data;
        this.totalRecords = totalRecords;
        if (page != null){
            buildPaginationMetaData(totalRecords,pageSize,page);
        }
    }

    private void buildPaginationMetaData(Integer totalRecords, Integer pageSize, Integer page) {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String url = request.getRequestURL().toString();
        this.page = page;
        this.pageSize=pageSize;
        int totalPages = (int) (Math.ceil((double) totalRecords / pageSize));
        this.totalPages = totalPages;

        if (page > 1 && totalPages > 1)
            this.previous = url + "?page=" + (page -1);

        if (page < totalPages)
            this.next= url + "?page=" + (page +1);
    }
}
