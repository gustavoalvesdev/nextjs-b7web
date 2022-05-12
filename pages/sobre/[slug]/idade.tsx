import { useRouter } from "next/router";

const Idade = () => {

    const { slug } = useRouter().query;

    return (
        <div>{ slug } tem 90 anos.</div>
    )
}

export default Idade;