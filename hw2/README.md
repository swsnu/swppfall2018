# Homework 2 - Angular Framework

#### **Due: 10/12 (Fri) 20:59 (This is a hard deadline)**

You will implement a front-end for a blogging service using Angular framework. This is an **individual** assignment.
This assignment will help you

- Make a simple Angular (version 6.1.0) application before diving into your projects
- Let you try out stuff we have learned in our practice sessions

## Features

Our blog will support three models: User, Articles, and Comments.
You are required to create a total of five pages as shown in the below storyboard, meeting the following requirements:

![image](https://i.imgur.com/xDPo8Cl.png)

- Sign In page (`/sign_in`)
  - You must have the following fields:
    
    | HTML Tag type | id |
    |---------------|--|
    | input | email-input |
    | input | pw-input |
    | button | signin-button |

  - Users should be able to sign-in by filling up the email and password inputs and hitting the sign-in button.
  - As we don't have a proper backend, we don't do real, security-aware authentication yet, but users should only be able to log in with an account with an email of 'swpp@snu.ac.kr' and password of 'iluvswpp'.
  - When a user tries to sign in with invalid inputs, the frontend should emit `Email or password is wrong` message through `alert` command (in Typescript).
  - After signing in, users should find themselves at the article list page. (`/articles`)
  - This is the only page that unauthorized users will have access to. Unauthorized users trying to access any other pages should be redirected to this page! (use '**'!)     
- Article list page (`/articles`)
  - Users should be able to clearly make out the **whole** list of articles including article id, (full) article title, and author name in this page.
  - Also, user must be able to go to article create page (`/articles/create`) by hitting:
  
    | HTML Tag type | id |
    |-------------|--|
    | button | create-article-button |

  - Upon clicking on the article title, users should be able to access the article's detail page (`/articles/:id`). These article titles must be `button` but not `link`.
- Article write(create) page (`/articles/create`)
  - You must have the following fields in Write tab:
    
    | HTML Tag type | id |
    |-------------|--|
    | input or textarea | article-title-input |
    | input or textarea | article-content-input |
    | button | back-create-article-button |
    | button | confirm-create-article-button |
    | button (or maybe ngb-tab) | preview-tab-button |
    | button (or maybe ngb-tab) | write-tab-button |

  - Also, you must have the following fields in Preview tab:
  
    | HTML Tag type | id |
    |-------------|--|
    | any plain text (like h1, h3, p, …) | article-author |
    | any plain text (like h1, h3, p, …) | article-title |
    | any plain text (like h1, h3, p, …) | article-content |
    | button | back-create-article-button |
    | button | confirm-create-article-button |
    | button (or maybe ngb-tab) | preview-tab-button |
    | button (or maybe ngb-tab) | write-tab-button |
    
  - When users fill up the title and contents under Write tab and hit the confirm button (either in Preview tab or Write tab), a new article having the given title and contents should be posted.
  - The created article, of course, should be tagged with your own author id.
  - After creating the article, the user should be redirected to the created article's detail page (`/articles/:id`)
  - While creating the article, the user should be able to preview the contents (under the Preview tab by hitting `preview-tab-button`), in the way that it will be shown in the details page. The user should stay in `/articles/create` page while seeing the preview.
  - After checking the preview, the user should be able to resume writing (under the Write tab by hitting `write-tab-button`). The user should stay in `/articles/create` page after hitting the `write-tab-button`.
  - If the title and content input are empty, the confirm button should not react (don't post the new article nor make any alert).
  - The back button will go back to the article list page (`/articles`) (also without any alert).
- Article detail page (`/articles/:id`)
  - You must have the following fields:
  
    | HTML Tag type | id |
    |-------------|--|
    | any plain text (like h1, h3, p, …) | article-author |
    | any plain text (like h1, h3, p, …) | article-title |
    | any plain text (like h1, h3, p, …) | article-content  |
    | input or textarea | new-comment-content-input |
    | button | confirm-create-comment-button |
    | button | edit-comment-button |
    | button | delete-comment-button |
    | button | edit-article-button |
    | button | delete-article-button |
    | button | back-detail-article-button |

  - Users should be able to clearly make out the title, contents, and author name of the article.
  - Also, users should be able to see the whole comments for the corresponding article including the author name and contents of each comments.
  - Simple comments functionalities (Create for everyone / Edit/Delete for the comment author through the buttons) should work.
    - When a user hits the `confirm-create-comment-button`, a new comment with the contents provided through `new-comment-content-input` and the author's name should be added to this detail page (without any alert).
    - When a user hits the `edit-comment-button`, a `prompt` taking some string input should be popped up (by using Typescript `prompt` command). 
      - When the user fill the prompt input with new contents and confirm the pop-up, the contents of the comment should be updated with the new contents.
      - When the user canceled the pop-up, the contents should not be modified.
    - When a user hits the `delete-comment-button`, the comment should be deleted without any alert.
    - The edit and delete button for each comment must be visible for the author only.
  - Edit/Delete button for the article should work.
    - These buttons must be visible for the author only.
    - When a user hit the `edit-article-button`, the user should be redirected to the edit page (`articles/:id/edit`)
    - When a user hit the `delete-article-button`, the user should be redirected to the article list page (`articles/`) and the article should be deleted without any alert.
  - When a user hits `back-detail-article-button` button, the user should be redirected to the article list page.
- Article edit page (`/articles/:id/edit`)
  - You must have the following fields in Write tab:
  
    | HTML Tag type | id |
    |-------------|--|
    | input or textarea | article-title-input |
    | input or textarea | article-content-input |
    | button | back-edit-article-button |
    | button | confirm-edit-article-button |
    | button (or maybe ngb-tab) | preview-tab-button |
    | button (or maybe ngb-tab) | write-tab-button |

  - Also, you must have the following fields in Preview tab:
    
    | HTML Tag type | id |
    |-------------|--|
    | any plain text (like h1, h3, p, …) | article-author |
    | any plain text (like h1, h3, p, …) | article-title |
    | any plain text (like h1, h3, p, …) | article-content |
    | button | back-edit-article-button |
    | button | confirm-edit-article-button |
    | button (or maybe ngb-tab) | preview-tab-button |
    | button (or maybe ngb-tab) | write-tab-button |
    
  - Users should see similar stuffs with article create page: Write tab and Preview tab. All requirements for the plain texts and tab buttons are identical to the create page (except the url).
  - When a user hits `confirm-edit-article-button`, the user should be redirected to the article detail page (`articles/:id`) and the edited title and contents should be saved. Any comment for the article should not be modified or deleted by this process.
  - When a user hits `back-edit-article-button`, the following features should be supported:
    - If the title and contents have not been modified yet but are the same as the title and contents before editing, just go back to the detail page without any alert.
    - If the title or contents has been modified modified, you should make a confirmation pop-up (through Typescript `confirm` command) with message `Are you sure? The change will be lost.`
      - If the user accept the confirmation, the user should be redirected to the detail page and the title and contents of the article should not be modified.
      - If the user dismiss the confirmation, the user should just stay on the edit page and be able to resume editing.
- Common things for all pages:
  - If the user is signed-in, the user should be able to sign out from any of the pages by clicking `signout-button`. Upon signing out, the user should end on the initial Sign In page (shown as dotted lines on the storyboard).
    
    | HTML Tag type | id |
    |---------------|--|
    | button | signout-button |

  - Each user should be able to update or delete articles and comments only which they have created.
  - **All pages/components should have proper unit tests to test its functionalities**, written in Jasmine, run by Karma (as shown in [this link](https://angular.io/guide/testing) and the practice session). Your tests are expected to cover all of your code, and we will give credits according to your coverage results. You can see the coverage information of your application as shown [here](https://www.angularonrails.com/add-test-coverage-report-angular-cli-project/). Also, all of your tests must pass.

We provide a [in-memory mock backend](https://angular.io/tutorial/toh-pt6) with our skeleton code.
Due to its simplicity, we do not go over too much into authentication and security for now, but later on (with HW3 and your project), it should be considered.

You should be able to implement your service component by sending appropriate http requests to the following URLs:

| API                    | GET | POST | PUT | DELETE |
|------------------------|-----|------|-----|--------|
| `api/user/:id`      | Get user information containing whether or not the user is signed_in | X | Update user's `signed_in` value to sign-in/sign-out | X |
| `api/articles`             | Get article list | Create new article |  | X |
| `api/articles/:id`         | Get specified article | X | Edit specified article | Delete specified article |
| `api/comments`        | Get comments | Create new comment | X | X |
| `api/comments/:id`         | Get specified comment | X | Edit specified comment | Delete specified comment |

Articles should have an `id` (number), `author_id` (number), `title` (string), and `content` (string).
Comments should have an `id` (number), `author_id` (number), `article_id` (number), and `content` (string).
Users should have an `id` (number), `email` (string), `password` (string), `name` (string), and `signed_in` (boolean).

Each field names are as specified above. You should be able to implement the pages required with these APIs.

## Comments on files

Files that are created inside the `skeleton` (root) and `src` folder have been already discussed during the practice session (contents in [this link](https://angular.io/guide/quickstart#project-file-review)). You are not expected to create e2e tests just yet, but each `*.ts` files under your `src/app` directory should have corresponding `*.spec.ts` files that performs unit tests on your code. We will score your homework with our own e2e tests and your unit tests coverage. As we have done so in our practice sessions, you are expected to add components under the `src/app` directory freely, according to your needs. Nicely refactored code will result in better readability and is recommended. 

The `in-memory-data.service.ts` file is added to provide mock-backend for you to test out your application, and serves as specified above. **Please do not modify this file.** Under `src/app/*`, You are expected to create `Services` that communicate using HTTP, and `Components` that produce each pages meeting the requirements. The existing `AppCompoenent` is expected to be the root component of the entire application.
Also, please do not make any un-requested alerts. It will largely harm the e2e test result.
We will test your code after conducting `npm install`, so you can import other libraries through `package.json`. However, you should not change the version of already imported dependencies.

## Tips

- Most of things have been covered in the tutorial during the lab session. Please look carefully through the slides and the tips provided.
- It might be useful and more pleasing to the eyes by using a CSS framework like [Bootstrap](http://getbootstrap.com). However, this is optional, please proceed on your own willings. You might be needing them for your projects ahead, so it would be nice to have some head start.

## Grading

This assignment is composed of a total of 70 points.
We will score your code with our e2e test code, having 55 test cases that reflects the requirements given above. You will get 1 point for each passed test case.
Also, we will check your unit test coverage. You will get 15 points if all of your unit tests pass and they cover your project entirely.

The e2e test consist of cases about:
- Sign in page features (4 cases)
- Article list page features (5 points)
- Article create page features (10 points)
- Article detail page features when the user is the author of the article (14 points)
- Article detail page features when the user is not the author of the article (13 points)
- Article edit page features (9 points)

Because we will automatically score your homework, please make sure that you followed the features specification (especially, the Tag type and id of HTML fields).
Also, if some basic features are not implemented properly, many other test cases can fail. For example, if the signing-in process works badly, most of the cases above will fail.
We'll try to give some partial points in this case, but it might not be enough.
It's a good idea to start with the sign-in page, and then implement routing features, article list pages, and other features in order.

## Submission

**Due: 10/12 (Fri) 20:59 (This is a hard deadline)**

We will check the snapshot of the *master* branch of your Github repository at the deadline and grade it.
Please name your repository as `swpp-hw2-YOUR_USERNAME`, and replace YOUR_USERNAME with you own GitHub username.
Refer to HW1 to create another private repository.

Please put your angular application files in the root folder (not inside another `hw2` or `skeleton` folder) appropriately.
Your directory hierarchy should look like this:
```
repository_root/
  README.md (this file)
  e2e/
    ...
  src/
    app/
    assets/
    environment/
    ...
  package.json
  ...
```

Also, make sure to push your work on Github on time. You won't need to send us an email for submission, but we will pull each repositories at the time specified.
