export default async function Verify({params}: { params: { code: string } }) {
    return <div>{params.code}</div>
};