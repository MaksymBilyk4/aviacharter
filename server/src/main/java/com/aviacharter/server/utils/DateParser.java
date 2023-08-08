package com.aviacharter.server.utils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class DateParser {
    public String parseLocalDateToString(LocalDate date) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy EEEE");
        return date.format(formatter);
    }
}
