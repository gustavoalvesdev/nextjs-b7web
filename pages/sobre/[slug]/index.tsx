import { useRouter } from 'next/router';

const SobreItem = () => {

    const router = useRouter();

    //const slug = router.query.slug;
    const { slug } = router.query;

    return (
        <div>Página Dinâmica do {slug}</div>
    );
}

export default SobreItem;