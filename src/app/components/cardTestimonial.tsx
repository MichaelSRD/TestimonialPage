import Image from "next/image"
import {Star} from "lucide-react"

type Item = {
    author: string,
    content: string,
    logo:string,
    estrellas:number
    indicador:number
}

export default function CardTestimonial(review:Item){
    return(
        <div className={`${review.indicador === 0 ? 'md:justify-self-end' : 'md:justify-self-start' } bg-[#FFFFFF] rounded-md shadow-md p-3 space-y-2 md:w-[400px] p-8 `}>
          <div className="flex items-center space-x-2">
             <Image src={review.logo} alt={""} width={100} height={100} className="mr-3"/>
             {[...Array(5)].map((_, i)=>(
               <Star key={i} className={`w-5 h-5 ${i < review.estrellas ? 'text-yellow-400 fill-yellow-400': 'text-gray-400' }`} />
             ))}
          </div>
          <div className="space-y-3">
            <p className="text-base text-xl font-bold">{review.author}</p>
            <p className="text-[#52525A]">{review.content}</p>
          </div>
        </div>
    )
}