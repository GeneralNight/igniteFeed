import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


export const relativeTime = (date: Date, formatString?: string) => {

  const relativePublishedAt = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  }) 
  
  if(!formatString) {
    return {relativePublishedAt} 
  }

  const formatDate = format(date, formatString, {
    locale: ptBR
  })   

  return {formatDate, relativePublishedAt}
};