export class TopicServiceClient{

  TOPIC_URL = 'https://bhargavi-webdev-18.herokuapp.com/api/course/CID/module/MID/lesson/LID/topic'

  findTopicsForLesson(courseId, moduleId, lessonId){
    return fetch(this.TOPIC_URL.replace('CID', courseId)
      .replace('MID', moduleId)
      .replace('LID', lessonId))
      .then(response => response.json())
  }

}
