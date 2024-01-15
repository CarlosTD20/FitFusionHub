package com.CTornero.FitFusionHub.http_errors;

import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.CTornero.FitFusionHub.exception.ResourceNotFoundException;

@ControllerAdvice
public class ApiExceptionHandler {

    // Maneja excepciones de tipo ResourceNotFoundException
    @ResponseStatus(HttpStatus.NOT_FOUND) // Establece el código de estado de respuesta HTTP como "404 Not Found"
    @ExceptionHandler({ // Define que este método manejará excepciones de tipo ResourceNotFoundException
            ResourceNotFoundException.class
    })
    @ResponseBody // Indica que el valor devuelto por este método se debe incluir en el cuerpo de la respuesta HTTP
    public ErrorMessage notFoundRquest(Exception exception){
        return  new ErrorMessage(exception.getMessage(),HttpStatus.NOT_FOUND.value());// Crea un objeto ErrorMessage con el mensaje de la excepción y el código de estado "404"
    }

    // Maneja excepciones de tipo Exception (excepciones generales)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR) // Establece el código de estado de respuesta HTTP como "500 Internal Server Error"
    @ExceptionHandler({
            Exception.class // Define que este método manejará excepciones de tipo Exception
    })
    @ResponseBody // Indica que el valor devuelto por este método se debe incluir en el cuerpo de la respuesta HTTP
    public ErrorMessage exception(Exception exception){
        exception.printStackTrace(); // Imprime la traza de la excepción en la consola (esto es útil para el diagnóstico)
        return new ErrorMessage("Internal error", HttpStatus.INTERNAL_SERVER_ERROR.value()); // Crea un objeto ErrorMessage con un mensaje genérico de "Internal error" y el código de estado "500"
    }
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(HttpMessageNotReadableException.class)
    @ResponseBody
    public ErrorMessage badRequest(HttpMessageNotReadableException exception){
        return new ErrorMessage("Invalid request body",HttpStatus.BAD_REQUEST.value());
    }
}
