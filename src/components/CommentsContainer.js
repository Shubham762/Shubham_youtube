import React from "react";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Shubham Tiwari",
      text: "this you tube is awesome wonderful*******",
      replies: [],
    },
    {
      name: "Shubham Tiwari",
      text: "this you tube is awesome wonderful*******",
      replies: [
        {
          name: "Shubham Tiwari",
          text: "this you tube is awesome wonderful*******",
          replies: [],
        },
        {
          name: "Shubham Tiwari",
          text: "this you tube is awesome wonderful*******",
          replies: [
            {
              name: "Shubham Tiwari",
              text: "this you tube is awesome wonderful*******",
              replies: [
                {
                  name: "Shubham Tiwari",
                  text: "this you tube is awesome wonderful*******",
                  replies: [
                    {
                      name: "Shubham Tiwari",
                      text: "this you tube is awesome wonderful*******",
                      replies: [
                        {
                          name: "Shubham Tiwari",
                          text: "this you tube is awesome wonderful*******",
                          replies: [
                            {
                              name: "Shubham Tiwari",
                              text: "this you tube is awesome wonderful*******",
                              replies: [
                                {
                                  name: "Shubham Tiwari",
                                  text: "this you tube is awesome wonderful*******",
                                  replies: [
                                    {
                                      name: "Shubham Tiwari",
                                      text: "this you tube is awesome wonderful*******",
                                      replies: [
                                        {
                                          name: "Shubham Tiwari",
                                          text: "this you tube is awesome wonderful*******",
                                          replies: [],
                                        },
                                      ],
                                    },
                                    {
                                      name: "Shubham Tiwari",
                                      text: "this you tube is awesome wonderful*******",
                                      replies: [
                                        {
                                          name: "Shubham Tiwari",
                                          text: "this you tube is awesome wonderful*******",
                                          replies: [
                                            {
                                              name: "Shubham Tiwari",
                                              text: "this you tube is awesome wonderful*******",
                                              replies: [],
                                            },
                                          ],
                                        },
                                        {
                                          name: "Shubham Tiwari",
                                          text: "this you tube is awesome wonderful*******",
                                          replies: [
                                            {
                                              name: "Shubham Tiwari",
                                              text: "this you tube is awesome wonderful*******",
                                              replies: [
                                                {
                                                  name: "Shubham Tiwari",
                                                  text: "this you tube is awesome wonderful*******",
                                                  replies: [],
                                                },
                                              ],
                                            },
                                            {
                                              name: "Shubham Tiwari",
                                              text: "this you tube is awesome wonderful*******",
                                              replies: [
                                                {
                                                  name: "Shubham Tiwari",
                                                  text: "this you tube is awesome wonderful*******",
                                                  replies: [
                                                    {
                                                      name: "Shubham Tiwari",
                                                      text: "this you tube is awesome wonderful*******",
                                                      replies: [],
                                                    },
                                                  ],
                                                },
                                                {
                                                  name: "Shubham Tiwari",
                                                  text: "this you tube is awesome wonderful*******",
                                                  replies: [],
                                                },
                                              
                                              ],
                                            },
                                          
                                          ],
                                        },
                                      
                                      ],
                                    },
                                  
                                  ],
                                },
                              ],
                            },
                            {
                              name: "Shubham Tiwari",
                              text: "this you tube is awesome wonderful*******",
                              replies: [],
                            },
                          
                          ],
                        },
                      ],
                    },
                    {
                      name: "Shubham Tiwari",
                      text: "this you tube is awesome wonderful*******",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Shubham Tiwari",
      text: "this you tube is awesome wonderful*******",
      replies: [],
    },
    {
      name: "Shubham Tiwari",
      text: "this you tube is awesome wonderful*******",
      replies: [
        {
          name: "Shubham Tiwari",
          text: "this you tube is awesome wonderful*******",
          replies: [],
        },
        {
          name: "Shubham Tiwari",
          text: "this you tube is awesome wonderful*******",
          replies: [
            {
              name: "Shubham Tiwari",
              text: "this you tube is awesome wonderful*******",
              replies: [
                {
                  name: "Shubham Tiwari",
                  text: "this you tube is awesome wonderful*******",
                  replies: [
                    {
                      name: "Shubham Tiwari",
                      text: "this you tube is awesome wonderful*******",
                      replies: [
                        {
                          name: "Shubham Tiwari",
                          text: "this you tube is awesome wonderful*******",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Shubham Tiwari",
                      text: "this you tube is awesome wonderful*******",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Shubham Tiwari",
      text: "this you tube is awesome wonderful*******",
      replies: [],
    },
    {
      name: "Shubham Tiwari",
      text: "this you tube is awesome wonderful*******",
      replies: [],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className="flex shadow-sm bg-gray-100 rounded-lg my-2">
        <img
        className="w-12 h-12"
          // src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          src="https://avatars.githubusercontent.com/u/44369765?v=4"
          alt="user logo"
        />
        <div className="px-2">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentList=({comments})=>{
    return( 
      comments.map((item,index)=>{
          return (
            <div key={index}>
              <Comment  data={item}/>
              <div className="pl-5 border border-l-black ">
              {/* <Comment key={index} data={item}/>
              <Comment key={index} data={item}/>
              <Comment key={index} data={item}/> */}
              <CommentList comments={item.replies}/>

              </div>
            </div>
            
          )
        })  
    )
  }


  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-bold">Comments:</h1>
      {/* <Comment data={commentsData[0]} />   first do for one comment then go for  all datas of array*/}
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
