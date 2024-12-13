export const convertHours12to24 = (hour) => {
    let [convertedHour, suffix] = hour.split(' ')
    if (convertedHour === '12') {
      convertedHour = '00'
    }
    if (suffix === 'PM') {
      convertedHour = parseInt(convertedHour, 10) + 12
    }
    return convertedHour
  }
  
  export const convertHours24to12 = (hour) => {
    var suffix = hour >= 12 ? 'PM' : 'AM'
    var convertedHour = ((hour + 11) % 12) + 1
    return convertedHour + ' ' + suffix
  }
  