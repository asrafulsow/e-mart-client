import React from 'react';

const CommentSection = () => {
    return (
        <div className="mx-4"> 
           

<div>

    <h1>Leave Commment here </h1>

    <form
            action="https://formsubmit.co/mahlilmaheee223@gmail.com"
            method="POST"
            className="grid grid-rows-4 gap-4"
          >
            {/* first line of the grid section will contain two input field  */}
            <div className="flex justify-between">
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-zinc-500 block pl-2 text-sm font-serif  text-zinc-400">
                  Name
                </span>
                <input
                  type="text"
               
                  class="border radius-sm  h-20  basis-1/2 w-full h-10 mx-1 my-2 border-zinc-400"
                  name="name"
                  style={{width:'260px'}}
                  required
                />
              </label>
             
                <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-zinc-500 block  text-sm font-serif pl-2    text-zinc-400">
                  Email
                </span>
                <input
                type="email"
               
                style={{width:'260px'}}
                class="border radius-sm basis-1/2 w-full h-10 mx-1 my-2 border-zinc-400"
                name="email"
                required
              />
              </label>
              
            </div>
       
             <label class="block " style={{width:'100%'}}>
                <span class="after:content-['*'] after:ml-0.5 after:text-zinc-500 block  text-sm font-serif  pl-2  text-zinc-400">
                  subject
                </span>
                <input
              type="text"
              name="subject"
          
              class="border radius-sm h-10 basis-1/2 w-full mx-1 my-2 border-zinc-400"
            />
              </label>
          
               <label class="block row-span-2">
                <span class="after:content-['*'] after:ml-0.5 after:text-zinc-500 block  text-sm font-serif pl-2   text-zinc-400">
                  Name
                </span>
                <textarea
            class="border radius-sm basis-1/2 h-20  mx-1 my-2 border-zinc-400 w-full"
             
            ></textarea>
              </label>
            <button
              type="submit"
              className="outline outline-2  m-1 border-zinc-400"
              style={{ width: "180px", height:'40px' }}
            >
              Submit question
            </button>
          </form>
</div>
        </div>
    );
};

export default CommentSection;