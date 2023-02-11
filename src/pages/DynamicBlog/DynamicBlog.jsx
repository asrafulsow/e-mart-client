import { faFacebook, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PopularPostContainer from '../../Components/Home/MostPopularBlog/PopularPostContainer';

const DynamicBlog = () => {
    return (
        <div class="grid grid-cols-3 font-mono ">

            {/* this is the first div to take the contents here   */}
        <div className="col-span-2 pl-12 ">

{/* the details of the blog post  */}
<h1>Ultra-Thin Laptop Rentals and Rivalry</h1>
<img src="https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-2.jpg" alt="" />

<h1><strong>It has become an industry standard to put “mobile first” when designing for the mobile web and while this is, in general, a good thing  it has also left to a neglect of the tablet platform in mobile design</strong> </h1>

<p>As laptops have got slimmer, lighter and more compact, sacrifices have been made, the most obvious being the removal of many of the ports we used to rely on. Gone are the days when you could find a SDXD card slot on your MacBook Pro, with no Ethernet port you are reliant on a strong WiFi signal, and if you are still using old USB peripherals then you are going to have to kiss them goodbye if you want a new Mac laptop.</p>

<p><strong>WHAT PORTS DOES THE MACBOOK HAVE?</strong></p>

<p>
When Apple unveiled its <span className='text-rose-700'>ultra-slim MacBook </span> back in 2015, the new design caused quite a stir. Aside from being gorgeous and tiny, it also came with a hefty price tag and only one connection port  the relatively new USB-C. USB Type C offers up to 5Gbps transfers in addition to supporting charging. Like the MacBook Air, the 13in MacBook Pro has two Thunderbolt 3/USB-C ports. The 15in MacBook Pro offers four Thunderbolt 3/USB-C ports.
</p>

<p>
    <span>"</span> <h1>All you need is a laptop or a PC and an Internet connection and you can pretty much do almost anything and create almost any type of company.</h1>
</p>
<p>

There is one other <span className="text-rose-700">difference between the USB-C port</span> on the different MacBooks. The other benefit of the USB-C port is that it doesn’t matter what orientation you plug your cable in. If you feel that every time you plug in a USB-A plug it is the wrong way round, this will become a distant memory. That sounds like an awful lot of Thunderbolt 3/USB-C ports, to recap:
</p>

<ul  className='list-disc'>
    <li> MacBook: One USB-C port</li>
    <li>MacBook Air: Two Thunderbolt 3/USB-C ports</li>
    <li>MacBook Air: Two Thunderbolt 3/USB-C ports</li>
    <li>MacBook Air: Two Thunderbolt 3/USB-C ports</li>
</ul>

{/* now the table component 
 */}
 <br />
 <br />

<div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th> Description</th>
        <th>Mackbook</th>
        <th>Mackbook pro</th>
        <th>Mackbook</th>
        
      </tr>
    </thead>
    <tbody>

      <tr>
        <th>Dusplay</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>

      <tr>
        <th>core</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>

      <tr>
        <th>Memory</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
      <tr>
        <th>camera</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>


{/* div for socail media icons  */}
<div className="flex  items-center content-center">
    <span>Share on :</span>
    <div className="flex items-center mt-5">
              <FontAwesomeIcon
                style={{ width: "40px", height: " 40px", color: "rgb(89 0 231)" }}
                icon={faTwitch}
                className="mx-3"
              />
              <FontAwesomeIcon
                style={{ width: "40px", height: " 40px", color: "rgb(7 198 229)" }}
                icon={faTwitter}
                className="mx-3"
              />
              <FontAwesomeIcon
                style={{ width: "40px", height: " 40px", color: "rgb(30 127 211)" }}
                icon={faFacebook}
                className="mx-3"
              />
              <FontAwesomeIcon
                style={{ width: "40px", height: " 40px", color: "#ed3a04" }}
                icon={faYoutube}
                className="mx-3"
              />
            </div>
</div>


{/* div for the buttons here 
 */}

<div className="flex  items-center content-center">
    <span>Share on :</span>
    <div className="flex items-center mt-5">
              <button className="border-2 border-gray-700 p-1 ml-2">Awesome</button>
              <button className="border-2 border-gray-700 p-1 ml-2">Photography</button>
              <button className="border-2 border-gray-700 p-1 ml-2">Awesome</button>
              <button className="border-2 border-gray-700 p-1 ml-2">Mackbook</button>
              <button className="border-2 border-gray-700 p-1 ml-2">Awesome</button>
              
            </div>
</div>


{/* the admin power div  */}

<div className="flex justify-between p-2 my-10">

<div className="avatar online">
  <div className="w-24 rounded-full">
    <img src="https://i.ibb.co/47k6szf/photo-2023-01-20-10-35-14.jpg" alt="mahlil" />
  </div>
</div>

<div className='ml-10'>
    <h1>JOHN <span className='text-rose-700 font-sans'>Administrator</span></h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem adipiscing in adipiscing.</p>
</div>
</div>

<PopularPostContainer></PopularPostContainer>
        </div>
       


       {/* and this is the second div which will contain all the things that are in the rigth side  */}
        <div className="">09</div>
      </div>
    );
};

export default DynamicBlog;