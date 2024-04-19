export function restructLocationData(data){
    let newDailyData = {}
    for (let i = 0; i < data.length; i++) {
      let date = data[i].dt_txt.slice(0, 10)
      if (newDailyData[date] === undefined) {
          newDailyData[date] = []
      }
      newDailyData[date].push(data[i])
    } 

    return newDailyData
}