export default {
  header: {
    about: "About",
    experience: "Experience",
    contact: "Contact"
  },
  home: {
    presentation: "I'm",
    profession: [ "Software Web Developer", "Full Stack Web Developer", "Frontend Web Developer" ]
  },
  about: {
    title: "About Me",
    description: "I am a developer passionate about solving problems and delivering solutions that address user needs. I enjoy working on internet-focused solutions, always seeking tools that can improve both our development process and the product."
  },
  experience: {
    title: "My Experience",
    showMore: "Show More",
    clubedovalor: {
      position: "Desarrollador Web Full Stack",
      company: "Clube do Valor",
      description: "PHP application development and maintenance for integration with financial institutions, automating daily portfolio data collection under management while ensuring high availability, performance, and data integrity.",
      fullDescription: `
        <p>I joined Clube do Valor in early 2026 as part of the Allocation and Market team, focusing on extracting and consolidating client portfolio data from financial institutions.</p>
        <br>
        <p>One of the main improvements I implemented was reorganizing the integration routine flow. I restructured the execution to use queue-based parallel processing and optimized the database persistence layer by switching from individual insertions to bulk inserts. This optimization reduced the total processing time of daily routines by approximately 55%.</p>
      `,
    },
    nelogica: {
      position: "Frontend Web Developer",
      company: "Nelogica",
      description: "Working with VueJS and React in a frontend-focused team, I participated in the maintenance of 3 e-commerce websites, the creation of 2 additional e-commerce sites, and 3 static websites. I implemented PIX payments and WebSocket integration in the projects.",
      fullDescription: `
        <p>I joined Nelogica at the end of 2021, working remotely. Gradually, the company transitioned back to the in-person model throughout 2022, and I eventually moved to Porto Alegre to work fully on-site in 2023.</p>
        <br>
        <p>My journey at Nelogica began in a support team where we had to quickly and accurately fix bugs to get solutions out the door and meet client demands.</p>
        <br>
        <p>The support team was responsible for maintaining internal management projects, websites, e-commerce platforms, and APIs.</p>
        <br>
        <p>Over time, I adapted to the company's pace and started participating in new projects, where I was able to apply my knowledge in VueJS and React to develop new features and improve the user experience.</p>
        <br>
        <p>I took part in creating new e-commerce websites such as <a href="https://investacademy.com.br/en" target="blank">InvestAcademy</a> and <a href="https://blackarrowtrading.com.br/en" target="blank">BlackArrow</a>. I also led projects such as implementing PIX payments in our stores, migrating an application from PHP to VueJS, and developing a new e-commerce platform, <a href="https://copyinvest.nelogica.com.br" target="blank">CopyInvest</a>, where clients can subscribe to follow another trader's operations.</p>
      `
    },
    zanshin: {
      position: "Full Stack Web Developer",
      company: "Zanshin Software",
      description: "Working with Ruby on Rails and JavaScript in a team of 2 developers and maintaining 7 projects, I participated in the implementation of VueJS in part of a system, integration with CENP, integration with payment gateways (Mecado Pago + Paypal), rebranding of system layouts, and contributed financial management reports for users.",
      fullDescription: `
        <p>I worked at Zanshin Software from 2018 to 2021, serving as a full stack web developer. The company specializes in developing SaaS solutions for advertising and digital marketing agencies through its platform <a href="https://sigasw.com.br" target="blank">SigaSW</a>.</p>
        <br>
        <p>During my time at Zanshin, I was responsible for several tasks and projects, including:</p>
        <br>
        <p>- Development and maintenance of SaaS applications in Ruby on Rails, serving over 2,500 users while ensuring scalability and high availability.</p>
        <br>
        <p>- Implementation of strategic integrations, including: Globo ADS (SIS.COM) for media advertising; Automated submission of media reports to CENP (Executive Council for Standard Norms); Issuance of electronic service invoices (NFS-e) using the ABRASF 2.0 model; Integration with Google Drive, enabling file storage and management directly within the application; Integration with payment gateways (Mercado Pago + PayPal).</p>
        <br>
        <p>- Redesign of layouts and user interfaces, enhancing user experience and system usability.</p>
        <br>
        <p>- Performance optimization through the migration of pages from SSR (Server-Side Rendering) to CSR (Client-Side Rendering) with Vue.js, reducing server load and improving user experience.</p>
        <br>
      `
    },
    "29sul": {
      position: "Full Stack Web Developer",
      company: "29Sul",
      description: "Working with Ruby on Rails and JavaScript in a team of 3 developers, we maintained a total of 5 software applications, which included management tools for advertising agencies, project management, financial management, and 2 internal management systems, all commercialized as SaaS. I also participated in the implementation of CNAB and OFX bank file remittance and return."
    }
  },
  skills: {
    title: "My Skills"
  },
  contact: {
    title: "Let's work together!"
  },
  footer: {
    message: "Make it count."
  }
}
