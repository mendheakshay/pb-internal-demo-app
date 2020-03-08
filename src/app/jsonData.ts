export interface Jsondata {
    header: string,
    subheader: Head[]
}

interface Head {
    subTitle: string,
    routerlink: string,
    project: HeadChild[]
};

interface HeadChild {
    projectDescription: string,
    videoURL: string,
    demoLink: string
};