package com.aviacharter.server.dto.operator;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OperatorRequestDto {

    private String operatorName;

    @Override
    public String toString() {
        return "OperatorRequestDto{" +
                "operatorName='" + operatorName + '\'' +
                '}';
    }
}
