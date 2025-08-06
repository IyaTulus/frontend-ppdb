

const InfoCard: React.FC = () => {
    return (
        <div className="flex flex-col bg-white p-2 rounded-sm shadow-md">
            <header className="border-b-2 border-[#079702] py-3">
                <h1 className="font-bold">Informasi Pendaftaran</h1>
            </header>
            <main className="pt-3 mx-5 h-[20rem]">
                <p className="w-96 text-justify">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                </p>
                <div className="my-5">
                    <button className="bg-[#079702] p-2 text-white rounded-sm">Selengkapnya</button>
                </div>
            </main>
        </div>
    )
}

export default InfoCard;