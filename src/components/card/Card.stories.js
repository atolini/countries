import React from 'react'
import Card from './Card'
import { rest } from 'msw'

export default {
  title: 'Card/Card Default',
  component: Card,
};

const Template = (args) => <Card {...args} />

export const Sucess = Template.bind({});
Sucess.args = { 
  commonName: 'Bulgaria', 
  flagUrl: 'https://flagcdn.com/w320/bg.png',
  population: '6927288', 
  region: 'Europe',
  capital: 'Sofia',
}
Sucess.parameters = { 
  msw: [
    rest.get('https://flagcdn.com/w320/bg.png', async (req, res, ctx) => {
      const image = await fetch('bulgaria_flag.png').then(function (res) {
        return res.arrayBuffer();
      })

      return res(
        ctx.set('Context-Length', image.byteLength.toString()), 
        ctx.set('Content-Type', 'image/png'),
        ctx.body(image),
        ctx.delay(3000), 
        ctx.status(200),
      )
    })
  ],  
}

export const Error = Template.bind({});
Error.args = { 
  commonName: 'Bulgaria', 
  flagUrl: 'https://flagcdn.com/w320/bg.png',
  population: '6927288', 
  region: 'Europe',
  capital: 'Sofia',
}
Error.parameters = {
  msw: [
    rest.get('https://flagcdn.com/w320/bg.png', async (req, res, ctx) => {
      return res(ctx.status(403), ctx.delay(3000))
    })
  ],
}


