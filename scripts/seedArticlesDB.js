
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Stacked");

const articleData = [
  {
  type: ["job-search"],

 title: ["25 Best Job Sites For Finding Your FIRST Developer Job"],

  url : ["https://skillcrush.com/blog/job-sites-to-find-your-first-developer-job/"],
  },
  {
    type: ["job-search"],
  
   title: ["Tackle the Web Developer Job Search"],
  
    url : ["http://blog.thefirehoseproject.com/posts/web-developer-job-search-guide/"],
  },
  {
    type: ["job-search"],
      
    title: ["How To Get Your First Web Developer Job: The Ultimate Guide for Junior Developers"],
      
    url : ["https://careerfoundry.com/en/blog/web-development/how-to-get-your-first-web-developer-job-the-ultimate-guide-for-junior-developers/"],
  },
  {
    type: ["job-search"],
          
    title: ["The Ultimate Job Search Guide: Literally Everything You Need to Know to Land a Job You'll Love"],
          
    url : ["https://www.themuse.com/advice/the-ultimate-job-search-guide-literally-everything-you-need-to-know-to-land-a-job-youll-love"],
  },
  {
    type: ["interview-prep"],
          
    title: ["How to Ace the Web Developer Job Interview – The Ultimate Guide"],
          
    url : ["https://www.codingdojo.com/blog/programming-interview-questionse"],
  },
  {
    type: ["interview-prep"],
          
    title: ["Web Developer Job Interviews Decoded: Exactly What Skills To Highlight, What To Expect, And How To Leave A Positive Impression"],
          
    url : ["https://skillcrush.com/blog/web-developer-job-interview/"],
  },
  {
    type: ["interview-prep"],
          
    title: ["Common Web Developer Interview Questions (With Example Answers"],
          
    url : ["https://www.indeed.com/career-advice/interviewing/web-developer-interview-questions"],
  },
  {
    type: ["interview-prep"],
          
    title: ["Key Takeaways from my first Front-end Web Developer Interview"],
          
    url : ["https://www.freecodecamp.org/news/key-takeaways-from-my-first-front-end-web-developer-interview-90baa9eff1af/"],
  },
  {
    type: ["resources"],
          
    title: ["A List Apart – For people who make websites"],
          
    url : ["https://alistapart.com/"],
  },
  {
    type: ["resources"],
          
    title: ["dev.to - DEV Community"],
          
    url : ["https://dev.to/"],
  },
  {
    type: ["resources"],
          
    title: ["Web Development Resources - More than 150+ resources for your web development"],
          
    url : ["https://dev.to/"],
  },
  {
    type: ["resources"],
          
    title: ["Hacker Noon - DEV community"],
          
    url : ["https://hackernoon.com/"],
  },
  {
    type: ["resources"],
          
    title: ["Women Who Code - DEV community"],
          
    url : ["https://www.womenwhocode.com/"],
  },
  {
    type: ["resources"],
          
    title: ["CodeProject - DEV community"],
          
    url : ["https://www.codeproject.com/"],
  },
];


db.articles
  .remove({})
  .then(() => db.articles.collection.insertMany(articleData))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

  module.exports = articleData;