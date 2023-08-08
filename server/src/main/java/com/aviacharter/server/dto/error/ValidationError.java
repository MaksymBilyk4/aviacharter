package com.aviacharter.server.dto.error;

public record ValidationError (String field, String message) {
}
