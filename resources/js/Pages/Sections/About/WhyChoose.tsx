import Heading from "@/Components/heading/Heading";
import childletter from '../../../../assets/child-letter.png'
export default function WhyChoose() {
    return (
        <div className="py-10">
            <Heading
                title="Waarom kiezen voor SwiftLetters"
                text1="Bij Swift Letters.nl streven we ernaar om de beste service te bieden voor het versturen van jouw brieven en documenten. Hier zijn drie redenen waarom je voor ons zou moeten kiezen:"
                text2=""
                showButton={false}
                buttonText=""
                secondaryButtonText=""
            />
            <img src={childletter} alt="child-letter" className=" mx-auto w-[250px] h-[350px]" />
        </div>
    );
}


