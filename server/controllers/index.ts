'use strict';
import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import db from '../models/index';
// import {getAllJobs, destroyJobs}  from '../models/jobs';

const getAllJobs = async (req: Request, res: Response) => {
  const location = req.params.location

  
  const rootUrl = 'http://127.0.0.1:3001';

  try {
    console.log('backend fired');
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
      url: `https://www.reed.co.uk/api/1.0/search?location=${location.toLowerCase()}`,
      headers: {
        Authorization: 'Basic OGQ0NjE5ZDAtYmFmOC00NjU0LWFlOGYtZjBlZGNmODFjYTgzOg==',
        Cookie:
          '__cf_bm=_XHHXLLAfiulKwbCunwXWT9gxt9vZ9uhCyoNFCUdGmE-1651663127-0-ASv4uaejLzWDt5NSG/B/jk9PE7UW41GsXeLj6o37rJVt9nD0KW55zAIeIpHnjb75a92noj+x91AAtORy8H0jFXw=; __cfruid=e36c3bf5e688612ab5dd0d0de1259c95831210c1-1651661474; .ASPXANONYMOUS=tkN_OQrA9fmZQWsZPkhBlFQt5esUKFQbpZq2wAvNJhjavXYqDBuZqMpkcM98OT0K1Ra6SzrH0MMEJxfc83UxRyjQB3IPmVE1OQx-kBwbeuI3Y7D0zmhrVr87OyFBwWH-Od45Ig2',
      },
    };

    

    await axios(config).then((response) => {
      console.log('params', JSON.stringify(response.data));
      res.status(200).send(JSON.stringify(response.data));
    });

    // console.log('res', res);

    // console.log('dataaaa',jobs)
    // const allJobs = await Jobs.getAllJobs();
    // res.status(200);
    // res.send(allJobs);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export default getAllJobs;
