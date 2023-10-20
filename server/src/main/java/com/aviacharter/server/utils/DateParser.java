package com.aviacharter.server.utils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class DateParser {
    public String parseLocalDateToString(LocalDate date) {
        if (date != null) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
            return date.format(formatter);
        }

        return "";
    }

    public LocalDate parseStringToLocalDate(String dateString) {
        if (dateString.length() > 0) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
            return LocalDate.parse(dateString, formatter);
        }
        return null;
    }
}
