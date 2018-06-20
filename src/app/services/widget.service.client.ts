export class WidgetServiceClient{

  WIDGET_URL = 'https://bhargavi-webdev-18.herokuapp.com/api/topic/TID/widget'

  findWidgetsForTopic(topicId){
    return fetch(this.WIDGET_URL
      .replace('TID', topicId))
      .then(response => response.json());
  }

}
