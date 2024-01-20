import {
  DiReact,
  DiNodejsSmall,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiPostgresql,
  DiDocker,
  DiGit,
  DiGithubBadge,
  DiSass,
  DiLess,
  DiBootstrap,
  DiJqueryLogo,
  DiAngularSimple,
  DiPhp,
  DiRuby,
  DiRor,
  DiGo,
  DiDotnet,
  DiSwift,
  DiApple,
  DiAndroid,
  DiWindows,
  DiLinux,
  DiFirebase,
  DiAws,
  DiHeroku,
  DiDigitalOcean,
  DiNginx,
  DiTrello,
  DiVisualstudio,
  DiEclipse,
  DiIntellij,
  DiAtom,
  DiSublime,
  DiWebplatform,
  DiRasberryPi,
} from "react-icons/di";
import {
  SiVuedotjs,
  SiWordpress,
  SiTensorflow,
  SiPytorch,
  SiFlutter,
  SiSlack,
  SiApache,
  SiArduino,
  SiJenkins,
  SiKubernetes,
  SiDjango,
  SiFlask,
  SiPostman,
  SiTerraform,
  SiAnsible,
  SiPuppet,
  SiChef,
  SiGrafana,
  SiPrometheus,
  SiElasticsearch,
  SiLogstash,
  SiKibana,
  SiSplunk,
  SiNewrelic,
  SiDatadog,
  SiDynatrace,
  SiJira,
  SiConfluence,
  SiBitbucket,
  SiGitlab,
  SiGithubactions,
  SiTypescript,
  SiNextdotjs,
  SiGatsby,
  SiNpm,
  SiYarn,
  SiBabel,
  SiWebpack,
} from "react-icons/si";

interface TechStackIcon {
  [key: string]: JSX.Element;
}

const size = 70; // You can adjust the size as needed

const techStackIcons: TechStackIcon = {
  react: <DiReact size={size} />,
  nodejs: <DiNodejsSmall size={size} />,
  python: <DiPython size={size} />,
  java: <DiJava size={size} />,
  html: <DiHtml5 size={size} />,
  css: <DiCss3 size={size} />,
  javascript: <DiJavascript1 size={size} />,
  mongodb: <DiMongodb size={size} />,
  mysql: <DiMysql size={size} />,
  postgresql: <DiPostgresql size={size} />,
  docker: <DiDocker size={size} />,
  git: <DiGit size={size} />,
  github: <DiGithubBadge size={size} />,
  sass: <DiSass size={size} />,
  less: <DiLess size={size} />,
  bootstrap: <DiBootstrap size={size} />,
  jquery: <DiJqueryLogo size={size} />,
  angular: <DiAngularSimple size={size} />,
  vue: <SiVuedotjs size={size} />,
  wordpress: <SiWordpress size={size} />,
  php: <DiPhp size={size} />,
  ruby: <DiRuby size={size} />,
  ror: <DiRor size={size} />,
  go: <DiGo size={size} />,
  dotnet: <DiDotnet size={size} />,
  swift: <DiSwift size={size} />,
  apple: <DiApple size={size} />,
  android: <DiAndroid size={size} />,
  windows: <DiWindows size={size} />,
  linux: <DiLinux size={size} />,
  firebase: <DiFirebase size={size} />,
  aws: <DiAws size={size} />,
  heroku: <DiHeroku size={size} />,
  digitalocean: <DiDigitalOcean size={size} />,
  nginx: <DiNginx size={size} />,
  apache: <SiApache size={size} />,
  trello: <DiTrello size={size} />,
  slack: <SiSlack size={size} />,
  visualstudio: <DiVisualstudio size={size} />,
  eclipse: <DiEclipse size={size} />,
  intellij: <DiIntellij size={size} />,
  atom: <DiAtom size={size} />,
  sublime: <DiSublime size={size} />,
  webplatform: <DiWebplatform size={size} />,
  rasberrypi: <DiRasberryPi size={size} />,
  arduino: <SiArduino size={size} />,
  tensorflow: <SiTensorflow size={size} />,
  pytorch: <SiPytorch size={size} />,
  flutter: <SiFlutter size={size} />,
  jenkins: <SiJenkins size={size} />,
  kubernetes: <SiKubernetes size={size} />,
  django: <SiDjango size={size} />,
  flask: <SiFlask size={size} />,
  postman: <SiPostman size={size} />,
  terraform: <SiTerraform size={size} />,
  ansible: <SiAnsible size={size} />,
  puppet: <SiPuppet size={size} />,
  chef: <SiChef size={size} />,
  grafana: <SiGrafana size={size} />,
  prometheus: <SiPrometheus size={size} />,
  elasticsearch: <SiElasticsearch size={size} />,
  logstash: <SiLogstash size={size} />,
  kibana: <SiKibana size={size} />,
  splunk: <SiSplunk size={size} />,
  newrelic: <SiNewrelic size={size} />,
  datadog: <SiDatadog size={size} />,
  dynatrace: <SiDynatrace size={size} />,
  jira: <SiJira size={size} />,
  confluence: <SiConfluence size={size} />,
  bitbucket: <SiBitbucket size={size} />,
  gitlab: <SiGitlab size={size} />,
  githubactions: <SiGithubactions size={size} />,
  typescript: <SiTypescript size={size} />,
  nextjs: <SiNextdotjs size={size} />,
  gatsby: <SiGatsby size={size} />,
  npm: <SiNpm size={size} />,
  yarn: <SiYarn size={size} />,
  babel: <SiBabel size={size} />,
  webpack: <SiWebpack size={size} />,
};

export default techStackIcons;
