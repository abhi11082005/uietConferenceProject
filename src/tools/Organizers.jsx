export default function Organizers() {
  return (
    <div className="bg-blue-900 rounded-xl text-white py-8">
      <h2 className="text-center text-xl font-semibold mb-6 rounded-md">Organizing Committee</h2>
      <div className="flex justify-center gap-8 flex-wrap px-4">
        {[
          {
            role: "Chief Patron",
            name: "Prof. Vinay Kumar Pathak",
            title: "Hon'ble Vice-Chancellor, CSJMU",
            img: "https://csjmu.ac.in/wp-content/uploads/2022/08/vc-sir-csjmu.jpg",
          },
          {
            role: "Patron",
            name: "Prof. Sudhir Kumar Awasthi",
            title: "Pro Vice-Chancellor, CSJMU",
            img: "patron1.jpg",
          },
          {
            role: "Patron",
            name: "Dr. Anil Kumar Yadav",
            title: "Registrar, CSJMU",
            img: "patron2.jpg",
          },
          {
            role: "Executive Chair",
            name: "Prof. Brishti Mitra",
            title: "Director, UIET",
            img: "chair.jpg",
          },
        ].map((person) => (
          <div className="text-center max-w-[200px] " key={person.name}>
            <img
              src={`${person.img}`}
              alt={person.name}
              className="w-45 h-40 object-cover mx-auto rounded border-4 border-white"
            />
            <div className="mt-2 font-bold">{person.role}</div>
            <div>{person.name}</div>
            <div className="text-sm italic">{person.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
