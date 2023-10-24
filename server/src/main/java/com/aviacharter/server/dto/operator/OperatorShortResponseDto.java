package com.aviacharter.server.dto.operator;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OperatorShortResponseDto {

    private Long id;
    private String operatorName;

    @Override
    public String toString() {
        return "OperatorShortResponseDto{" +
                "id=" + id +
                ", operatorName='" + operatorName + '\'' +
                '}';
    }
}
