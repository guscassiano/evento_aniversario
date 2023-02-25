const dataNiver = new Date("Aug 31, 2023 19:00:00")
const timestampNiver = dataNiver.getTime()

const contaTempo = setInterval(() => {
    const agora = new Date();
    const timestampAtual = agora.getTime()

    const distNiver= timestampNiver - timestampAtual;

    const diasNiver = Math.floor(distNiver / (1000 * 60 * 60 * 24))
    const horasNiver = Math.floor((distNiver % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutosNiver = Math.floor((distNiver % (1000 * 60 * 60 )) / (1000 * 60))
    const segundosNiver = Math.floor((distNiver % (1000 * 60)) / 1000)
    console.log(segundosNiver)

    document.getElementById('contador').innerHTML = `${diasNiver}d ${horasNiver}h ${minutosNiver}m ${segundosNiver}s`

    if (distNiver < 0) {
        clearInterval(contaTempo)
        document.getElementById('contador').innerHTML = "Lamento, só ano que vem, mas ainda aceitamos presentes!!"
    }
}, 1000);