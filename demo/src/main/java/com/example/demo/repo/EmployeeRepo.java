/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.demo.repo;

import com.example.demo.model.Employee;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author ryota
 */
public interface EmployeeRepo extends JpaRepository<Employee, Long>{
    void deleteEmployeeById(Long id);
    Optional<Employee> findEmployeeById(Long id);
}
