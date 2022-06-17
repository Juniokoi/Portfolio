import React, { useState } from 'react'
import { Container } from './SkillStyle'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

const SkillTypes = [
  {
    title: 'Front-end',
    skills: [
      {
        title: 'HTML',
        img: '',
        alias: 'ícone do html',
      },
      {
        title: 'CSS',
        img: '',
        alias: 'ícone do css',
      },
    ],
  },
  {
    title: 'Back-end',
  },
  {
    title: 'Design UI',
  },
]

function Skills() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <>
      <Container>
        <h2>
          <span className="bodyFont">Minhas</span> habilidades.
        </h2>
        <hr />
        <ul>
          {SkillTypes.map((skillType, index) => (
            <Panel
              title={skillType.title}
              key={index}
              isActive={activeIndex === index}
              onShow={() => setActiveIndex(index)}
            >
              {skillType.skills?.map((skill) => console.log(skill))}
            </Panel>
          ))}
        </ul>
      </Container>
    </>
  )
}

export default Skills
interface PanelProps {
  title: string
  children?: any
  isActive: boolean
  onShow: () => void
}
function Panel({ title, children, isActive, onShow }: PanelProps) {
  return (
    <li className="panel">
      <div className="panel-header" onClick={onShow}>
        <h3>{title}</h3>
        <ArrowDownwardIcon
          className="ArrowIcon"
          sx={{ width: '42px', height: '42px' }}
        />
      </div>
      {isActive && <div>{children}</div>}
    </li>
  )
}
