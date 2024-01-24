import { Injectable } from '@nestjs/common';
const axios = require('axios');

@Injectable()
export class SunbirdService {

    private sunbirdSaasUrl = process.env.SUNBIRDSAAS_URL;

    constructor() { }

    async readCourse(id) {

        console.log(id)

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://sunbirdsaas.com/api/content/v1/read//${id}`,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        let response = await axios.request(config)

        return response.data

    }

    async getHierarchy(id) {

        console.log(id)

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://sunbirdsaas.com/api/course/v1/hierarchy/${id}`,
            headers: { }
          };

        let response = await axios.request(config)

        return response.data

    }

    async searchContent(body) {
        console.log(body)

        const axios = require('axios');
        let data = JSON.stringify(body);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://sunbirdsaas.com/api/content/v1/search',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        let response = await axios.request(config)
        return response.data
            

    }

}
