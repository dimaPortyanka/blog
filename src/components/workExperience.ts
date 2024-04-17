const workExperience: {
  start: string;
  end: string;
  role: string;
  location: string;
  company: string;
  achievements: string[];
}[] = [{
    start: '12 Sep 2022',
    end: 'now',
    role: 'Senior Software Engineer',
    location: 'Cambridge, MA, USA',
    company: 'KAYAK',
    achievements: [
        `Designed and implemented a tool to improve
        dev speed and code quality in unit test creation.`,
        `Implemented user-facing features and e2e
        tests to ensure the stable work of the application.`,
        `Designed and implemented a centralized
        notification system for users.`,
        `Increased code quality in a team by 
        constantly making code reviews and sharing best practices.`,
        `Made a knowledge-sharing session on
        how to write effective e2e tests.`,
    ],
},{
    start: '12 Oct 2019',
    end: '20 Apr 2022',
    role: 'Senior Software Engineer, Tech Lead Front-end',
    location: 'Zurich, Switzerland',
    company: 'SkyCell AG',
    achievements: [
        '4 times increased productivity of the team by designing and framework to generate forms.',
        `Developed VScode plugin to create components faster by 
        encapsulating base component structure in configurable templates`,
        `Decreased amount of frontend api requests by 80% and decreased server load by
        95% by designing and implementing GraphQL server that allowed to manage
        business entities in different states.`,
        'Onboarded new teammates and built an effective front-end team.',
    ],
},{
    start: '15 Jan 2018',
    end: '20 Aug 2019',
    role: 'Senior Software Engineer',
    location: 'Kyiv, Ukraine',
    company: 'Ciklum',
    achievements: [
        `Increased code coverage of application from 20 to 95 percent by providing simple
        in usage solution for testing, setup ci to make it transparent and informative, made
        a workshop on how to write tests and guided my teammates.`,
        `Decreased by 80% of unhandled errors by creating a framework 
        to handle errors automatically.`,
    ],
},{
    start: '20 Apr 2017',
    end: '29 Dec 2017',
    role: 'Senior Software Engineer',
    location: 'Kyiv, Ukraine',
    company: 'Innovecs',
    achievements: [
        'Setup frontend application from scratch and built a frontend team',
        'Established code rules, guidelines and onboarded teammates.',
        `Build a team with process and abilities to meet strict 
        deadlines and deliver high quality solutions at a high pace.`,
    ],
},{
    start: '15 Feb 2016',
    end: '15 Apr 2017',
    role: 'Software Engineer',
    location: 'Dnipro, Ukraine',
    company: 'Dataart',
    achievements: [
        `Improved way of handling API calls, defined a way to use redux-saga, 
        and held a workshop for teammates`,
        `Fixed problems with performance to render vast amounts of
        data.`,
        'Onboarding and mentoring junior developers.',
    ],
},]

export default workExperience
