export default{
    methods:{
      KelvinToCelsius(temp) {
        return (temp - 273.15).toFixed(2)
      },
      formatedDate(inputDate) {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const date = new Date(inputDate);
        const formattedDate = date.toLocaleDateString('en-US', options).replace(/(\d+),\s(\w{3})\s(\d+)/, '$1, $2 $3');

        return formattedDate
      },
      formatedTime(inputTime) {
        return inputTime.slice(11, 16)
      },
      pressureFormatedToMercury(pressure) {
        return Math.round(pressure * 7.5006 * Math.pow(10, -1))
      }
    }
}