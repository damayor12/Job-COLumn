'use strict';
import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

import Jobs from '../models/jobs';

async function getAllJobs(_: Request, res: Response) {
  const rootUrl = 'http://127.0.0.1:3001';

  try {
    console.log('backend fired')
    // const config = {
    //   headers: {
    //     auth: {
    //       username: '8d4619d0-baf8-4654-ae8f-f0edcf81ca83',
    //       password: '',
    //     },
    //   },
    // };

    var config = {
      method: 'get',
      url: 'https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london',
      headers: {
        Authorization: 'Basic OGQ0NjE5ZDAtYmFmOC00NjU0LWFlOGYtZjBlZGNmODFjYTgzOg==',
        Cookie:
          '__cf_bm=_XHHXLLAfiulKwbCunwXWT9gxt9vZ9uhCyoNFCUdGmE-1651663127-0-ASv4uaejLzWDt5NSG/B/jk9PE7UW41GsXeLj6o37rJVt9nD0KW55zAIeIpHnjb75a92noj+x91AAtORy8H0jFXw=; __cfruid=e36c3bf5e688612ab5dd0d0de1259c95831210c1-1651661474; .ASPXANONYMOUS=tkN_OQrA9fmZQWsZPkhBlFQt5esUKFQbpZq2wAvNJhjavXYqDBuZqMpkcM98OT0K1Ra6SzrH0MMEJxfc83UxRyjQB3IPmVE1OQx-kBwbeuI3Y7D0zmhrVr87OyFBwWH-Od45Ig2',
      },
    };

    axios(config)
      .then(function (response) {
        res.status(200).send(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });

    
      

    // const jobs: AxiosResponse = await axios.get(`${rootUrl}/jobs`);
    // const jobs: AxiosResponse = await axios.get(
    //   `https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london`,
    // );
    // console.log('dataaaa',jobs)
    // const allJobs = await Jobs.getAllJobs();
    // res.status(200);
    // res.send(allJobs);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export default getAllJobs;
