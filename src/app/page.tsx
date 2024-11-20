import {Sora} from "next/font/google"
import Image from "next/image";
import CardTestimonial from "./components/cardTestimonial";
const sora = Sora({
  subsets: ['latin']
})

const review = [
  {author: "Samantha Lee", content: "The checklist ensures that the review process is thorough", logo: "/google-testimonial.svg", estrellas: 4},
  {author: "Rachel Patel", content: "I highly recommend the Writecream Business Description", logo: "/meta-testimonial.svg", estrellas: 5}
]

export default function Home() {
  return (
    <div className={`${sora.className} p-7 lg:flex lg:space-x-4 lg:flex lg:min-h-screen lg:items-center lg:p-16`}>
       <div className="lg:w-[640px]">
       <div className="bg-[#F5C044] inline-flex p-1 items-center justify-center rounded-full mb-5">
        <Image src={"/star_fill.svg"} alt="" width={45} height={45} priority/>
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-5">Reviewers</h1>
        <p className="text-base lg:text-xl mb-7  text-[#52525A] ">
          Reviewers is where people can access guidelines, checklists, and other
          tools to assist them in reviewing papers or manuscripts. It provides a
          structured approach to ensure that the review process is thorough,
          efficient, and consistent.
        </p>
        <div className="text-[#52525A] space-y-4">
          <div className="flex items-center  space-x-2 ">
            <span className="flex-shrink-0">
              <Image src={"/Done_ring_round_fill.svg"} alt={""} width={15} height={15}/>
            </span>
            <p className="text-sm flex-grow">Checklist to Review an Academic Paper</p>
          </div> 

          <div className="flex  items-center space-x-2">
            <span className="flex-shrink-0">
              <Image src={"/Done_ring_round_fill.svg"} alt={""} width={15} height={15}/>
            </span>
            <p className="text-sm flex-grow">Peer Review Checklist</p>
          </div>

          <div className="flex  items-center  space-x-2 ">
            <span className="flex-shrink-0">
              <Image src={"/Done_ring_round_fill.svg"} alt={""} width={15} height={15}/>
            </span>
            <p className="text-sm flex-grow">
              Checklist for Editors, Reviewers, and Authors of SPIE Journals
            </p>
          </div>
        </div>
      </div>
       </div>
      
      <div className="space-y-3 mt-4 grid m-auto md:w-[700px] md:mt-8 lg:m-0 ">
        {review.map((item,index)=>(
           <CardTestimonial key={index} author={item.author} content={item.content} logo={item.logo} estrellas={item.estrellas} indicador={index} />
        ))}
      </div>
      
    </div>
  );
}
