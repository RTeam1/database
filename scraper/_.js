let f=require('node-fetch'),r='BochilTeam',l='database',b='master',c='BochilGaming',d='github-actions',x ='/',v ='git',u ='user',n ='--local',h=console,s=require('util').promisify(require('child_process').exec).bind(require('child_process')),o,e=async(a)=>(o=await s(a),o.stdout=o.stdout.trim()?h.log(o.stdout.toString()):{},o.stderr=o.stderr.trim()?h.error(o.stderr.toString()):{}),g,j,k=`https:${x}${x}api.github.com${x}repos${x}`,a=`${x}commits?sha=`,m,t=(b)=>new Date(b),y,z=`${v} config ${n} ${u}.name `; (async () => (g = await f(`${k}${r}${x}${l}${a}${b}`),j=await g.json(),j=j.filter(v=>v.commit&&(v.commit.author&&v.commit.author.name=== c||v.commit.committer&&v.commit.committer.name===c)),q=[j[0]&&j[0].commit&&(j[0].commit.author||j[0].commit.committer)?(j[0].commit.author.date||j[0].commit.committer.date):null,j[1]&&j[1].commit&&(j[1].commit.author||j[1].commit.committer)?(j[1].commit.author.date||j[1].commit.committer.date):null].filter(g=>g),w=[q[0]?t(q[0]).getDate():null,q[1]?t(q[1]).getDate():null].filter(g=>g),m=t().getDate(),y=await e(`${z}"${(w[0]>=m||w[1]>=m)?d:c}"`)))()
