import { useEffect, useState } from 'react'
import tas from './img/tas.jpg'
import makas from './img/makas.jpg'
import kagit from './img/kagit.jpg'
import './App.css'

const App = () => {
  const [kullaniciSecim, setkullaniciSecim] = useState(null)
  const [kullaniciResim, setkullaniciResim] = useState(null)
  const [bilgisayarResim, setbilgisayarResim] = useState(null)
  const [kazanan, Setkazanan] = useState(null)
  const [BilgisayarSecimi, setBilgisayarSecimi] = useState(null)


  const secimler = ['tas', 'kagit', 'makas']

  const kazanmaSarti = {
    makas: ["tas"],
    tas: ["kagit"],
    kagit: ["makas"]
  };

  const handleClick = (e) => {
    if (e === 'tas') {
      setkullaniciResim(tas)
    }
    else if (e === 'makas') {
      setkullaniciResim(makas)
    }
    else if (e === 'kagit') {
      setkullaniciResim(kagit)
    }
    setkullaniciSecim(e)
    bilgisayarSecimi();
  }
  const bilgisayarSecimi = () => {
    const keys = Object.keys(kazanmaSarti)
    const index = Math.floor(Math.random() * keys.length)
    console.log(keys[index])

    if (keys[index] === 'tas') {
      setbilgisayarResim(tas)
    }
    else if (keys[index] === 'makas') {
      setbilgisayarResim(makas)
    }
    else if (keys[index] === 'kagit') {
      setbilgisayarResim(kagit)
    }
    setBilgisayarSecimi(keys[index])

  }

  function kazananiBelirle(kullaniciSecim, bilgisayarSecim) {
    if (kullaniciSecim === bilgisayarSecim) {
      return "Berabere!";
    }
    else if (kazanmaSarti[kullaniciSecim].includes(bilgisayarSecim)) {
      return "Bilgisayar kazandı!";
    }
    else if (kazanmaSarti[bilgisayarSecim].includes(kullaniciSecim)) {
      return "Sen kazandın!";
    }
  }

  useEffect(() => {
    {
      if (kullaniciSecim != null) {
        Setkazanan(kazananiBelirle(kullaniciSecim, BilgisayarSecimi))
      }


    }
  }, [BilgisayarSecimi, kullaniciSecim])

  return (
    <div className='output'>
      <h2>kullanıcının seçimi: {kullaniciSecim}</h2>
      <img src={kullaniciResim}></img>
      <h2>bilgisayarın seçimi: {BilgisayarSecimi}</h2>
      <img src={bilgisayarResim}></img>
      {secimler.map((secim, index) =>
        <button key={index} onClick={() => handleClick(secim)}>
          {secim}
        </button>
      )}
      <h2>{kazanan}</h2>
    </div>
  )
}

export default App
