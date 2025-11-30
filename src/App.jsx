import React from 'react'
import Section1 from './assets/components/Section1/Section1'
import Section2 from './assets/components/Section2/Section2'

const App = () => {
  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Satisfied',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Underserved',
    },
    {
      img:'https://images.unsplash.com/photo-1759593218431-6f1585bc14de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      intro:'',
      tag:'Underbanked',
    },
    {
      img:'https://images.unsplash.com/photo-1701743802766-a982b2cc3d92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHdvcmtpbmclMjBnaXJsfGVufDB8fDB8fHww',
      intro:'',
      tag:'Undertaker',
    },
    {
      img:'https://images.unsplash.com/photo-1600791579629-74ce11c69bf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHdvcmtpbmclMjBnaXJsfGVufDB8fDB8fHww',
      intro:'',
      tag:'Agree',
    },
    
  ]
  return (
    <div>
      <Section1 users = {users}/>
      <Section2/>
    </div>
  )
}

export default App