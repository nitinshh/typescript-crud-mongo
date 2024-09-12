import express from 'express';
import { EmployeeModel } from '../models/employeeModel';

class EmployeeController {
    createEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const { name, email, mobile, dob, doj } = request.body;
            const employee = new EmployeeModel({
                name,
                email,
                mobile,
                dob,
                doj
            });
            await employee.save();
            return response.status(201).json({ message: 'employee created', data: employee });
        } catch (error) {
            return response.status(400).json({ error: 'Failed to create employee' });
        }
    }

    getAllEmployees = async (request: express.Request, response: express.Response) => {
        try {
            const employees = await EmployeeModel.find();
            return response.status(200).json({ data: employees });
        } catch (error) {
            return response.status(400).json({ error: 'Failed to fetch employees' });
        }
    }

    getEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            const employee = await EmployeeModel.findById(id);
            if (employee) {
                return response.status(200).json({ data: employee });
            } else {
                return response.status(404).json({ error: 'Employee not found' });
            }
        } catch (error) {
            return response.status(400).json({ error: 'Failed to fetch employee' });
        }
    }

    updateEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            const { name, email, mobile, dob, doj } = request.body;
            const employee = await EmployeeModel.findById(id);
            if (employee) {
                employee.name = name;
                employee.email = email;
                employee.mobile = mobile;
                employee.dob = dob;
                employee.doj = doj;

                await employee.save();
                return response.status(200).json({ message: 'employee updated', data: employee });
            } else {
                return response.status(404).json({ error: 'Employee not found' });
            }
        } catch (error) {
            return response.status(400).json({ error: 'Failed to update employee' });
        }
    }

    deleteEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            const employee = await EmployeeModel.findByIdAndDelete(id);
            if (employee) {
                return response.status(200).json({ message: 'employee deleted' });
            } else {
                return response.status(404).json({ error: 'Employee not found' });
            }
        } catch (error) {
            return response.status(400).json({ error: 'Failed to delete employee' });
        }
    }
}

export default new EmployeeController();
