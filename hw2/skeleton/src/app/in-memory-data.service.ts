import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const articles = [ 
      { id: 0,  author_id: 1, title: 'The Past, Present, and Future of the Angular CLI', content: 'The Angular CLI is a command-line interface for building Angular applications, and over the last year it has become one of the most essential tools in an Angular developer’s toolbox.' },
      { id: 11, author_id: 2, title: 'Taking Advantage of the Angular Material Datepicker', content: 'The datepicker is one of the newest components in Angular Material (added in May 2017). Our goal in creating the Angular Material datepicker is to create a datepicker that adheres to Material Design principles and is flexible enough to work across different applications and in different locales.' },
      { id: 12, author_id: 1, title: 'The State of CSS in Angular', content: 'Styling applications is a critical part of delivering great experiences for users. Across the web we have Cascading Style Sheets (CSS) as a powerful standard for developers to define the look of an application separately from its construction.' },
      { id: 13, author_id: 1, title: 'An Upgrade Path to Angular at Thomson Reuters', content: 'In the Tax & Accounting division of Thomson Reuters, we build software products for corporations, governments, accounting firms, financial institutions and more. We have a significant investment in AngularJS and Angular, and believe that migrating to the latest version is key to delivering the next generation of these products.' },
      { id: 14, author_id: 3, title: 'Announcing NgRx 4', content: 'Of course, there is a lot more great stuff in this release (the improved dev ergonomics and error messages for starters). So check out the ngrx platform repository to find out more.' },
      { id: 15, author_id: 2, title: 'Angular 4.3 Now Available', content: 'Angular version 4.3 has been released. This is a minor release following our announced adoption of Semantic Versioning, meaning that it contains no breaking changes and that it is a drop-in replacement for 4.x.x.' },
      { id: 16, author_id: 2, title: 'Moving Quickly', content: 'The Angular CLI has made a lot of progress over the last few months, you can view the comprehensive notes about this progress on the releases page, but it can be helpful to look back on what’s happened in the last 4 months.' },
      { id: 17, author_id: 2, title: 'Future of the CLI', content: 'The team working on the CLI has a lot of plans for making developers’ lives even easier. Here are a few of the ideas the team hopes to (but doesn’t promise to) include in future releases' },
      { id: 18, author_id: 3, title: 'Component-Scoped CSS', content: 'Angular’s component model empowers developers to build in isolation as much as possible. This applies to styles as well, where unexpected side effects from CSS can be undesirable.' },
      { id: 19, author_id: 3, title: 'Deep CSS', content: 'But what if I wanted to combine these two worlds? I want to write component-scoped CSS that affects the component itself as well as any children I put inside of it.' }, 
      { id: 20, author_id: 3, title: 'Improved Testing', content: 'NgRx clearly separates the UI, state management, and side effects. This alone makes testing more straightforward and enjoyable, but we always knew we could do better.' }
    ];  
    const comments = [ 
      { id: 0,  article_id: 0,  author_id: 1, content: 'Wow!' },
      { id: 1,  article_id: 0,  author_id: 2, content: 'What do you mean wow?' },
      { id: 2,  article_id: 0,  author_id: 3, content: 'I was surprised' },
      { id: 3,  article_id: 11, author_id: 1, content: 'Amazing!' },
      { id: 4,  article_id: 11, author_id: 3, content: 'I agree with you' },
      { id: 5,  article_id: 12, author_id: 3, content: 'Haha this is funny' },
      { id: 6,  article_id: 12, author_id: 2, content: 'Yes, it is hilarious' },
      { id: 7,  article_id: 13, author_id: 1, content: 'I am sad' },
      { id: 8,  article_id: 13, author_id: 2, content: 'I do not want to see you sad' },
      { id: 9,  article_id: 14, author_id: 3, content: 'I do not want to work' },
      { id: 10, article_id: 15, author_id: 3, content: 'What time is it?' },
      { id: 11, article_id: 15, author_id: 2, content: 'It is 5 in the morning' },
      { id: 12, article_id: 16, author_id: 1, content: 'I like it' },
      { id: 13, article_id: 17, author_id: 1, content: 'I do not think so' },
      { id: 14, article_id: 17, author_id: 2, content: 'Me neither' },
      { id: 15, article_id: 18, author_id: 2, content: 'I am so stressed out' },
      { id: 16, article_id: 18, author_id: 3, content: 'Stress is bad' },
      { id: 17, article_id: 18, author_id: 2, content: 'Yeah, I should try to feel better' },
      { id: 18, article_id: 19, author_id: 1, content: 'My dog is cute' },
      { id: 19, article_id: 19, author_id: 2, content: 'I think so as well' },
      { id: 20, article_id: 20, author_id: 3, content: 'Tornado has hit our town' },
      { id: 21, article_id: 20, author_id: 1, content: 'Oh, what a misery' }
    ];  
    const user = [ 
      { id: 1, email: 'swpp@snu.ac.kr', password: 'iluvswpp', name: 'Software Lover', signed_in: false },
      { id: 2, email: 'alan@turing.com', password: 'iluvswpp', name: 'Alan Turing', signed_in: false},
      { id: 3, email: 'edsger@dijkstra.com', password: 'iluvswpp', name: 'Edsger Dijkstra', signed_in: false}
    ]   
    return {articles, comments, user};
  }
}
