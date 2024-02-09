function Profile({ scientist, size = 100 }) {
  return (<section className="profile">
    <h2>{scientist.name}</h2>
    <img
      className="avatar"
      src='https://i.imgur.com/szV5sdGs.jpg'
      alt="Maria Skłodowska-Curie"
      width={70}
      height={70}
    />
    <ul>
      <li>
        <b>Profession: </b>
        {scientist.profession}
      </li>
      <li>
        <b>Awards: </b>
        {scientist.awards.split(`,`).length}
      </li>
      <li>
        <b>Discovered: </b>
        {scientist.element}
      </li>
    </ul>
  </section>)
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        scientist1={{
          name: 'Maria Skłodowska-Curie',
          profession: 'physicist and chemist',
          awards: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
          element: 'Polonium (element)'
        }}
      />
      <Profile
        scientist={{
          name: 'Katsuko Saruhashi',
          profession: 'geochemist',
          awards: ' (Miyake Prize for geochemistry, Tanaka Prize)',
          element: 'a method for measuring carbon dioxide in seawater'
        }}
      />
    </div>
  );
}
