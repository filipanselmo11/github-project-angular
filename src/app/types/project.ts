export interface ProjectInterface {
  id: number,
  title: string,
  technologie: string,
  ispublic: string,
}

export interface Projects {
  projects: ProjectInterface[]
}
