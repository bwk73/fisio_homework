README

Este repositório contém o projeto final acadêmico destinado à finalização da unidade curricular de Programação Full Stack do Curso de Análise e Desenvolvimento de Sistemas (ADS) do Centro Universitário UNISENAC - RS em Porto Alegre, Rio Grande do Sul, Brasil, ao final do segundo semestre do ano de 2026.

O seu objetivo é o de desenvolver uma aplicação web Full Stack que resolva um problema real por meio de uma interface web, um backend com API REST e um banco de dados.

PROPOSTA
Fisio Homework, acompanhamento de exercícios domiciliares. Fisioterapeutas passam exercícios para casa e não sabem se o paciente faz. O Fisio Homework mostra ao terapeuta quanto o paciente cumpriu e quando a dor piora, para ele ajustar o tratamento antes da próxima consulta.

PROBLEMAS E USUÁRIOS
Pacientes deixam de fazer os exercícios prescritos em casa. O fisioterapeuta não vê se o protocolo foi cumprido e só descobre na consulta seguinte. Hoje a comunicação acontece por foto e WhatsApp. Usando o Fisio Homework:

• Fisioterapeuta: cadastra pacientes, monta protocolos e acompanha a adesão e a dor.

• Paciente: entra no sistema, vê os exercícios do dia, marca o que fez e registra a dor de 0 a 10.

REQUISITOS
• Frontend moderno: React com Vite.
• Backend com API REST: Express.
• CRUD: pacientes, protocolos, exercícios e registros.
• Banco de dados: PostgreSQL em produção e no desenvolvimento local. 
• Requisições assíncronas: o React consome a API com fetch ou Axios.
• Login: JWT, com senha armazenada como hash (bcrypt).
• API externa: YouTube Data API v3. A chave fica no backend, nunca no frontend.
• Deploy: frontend em Vercel ou Netlify, backend em Render, banco em Render ou Supabase.
• Algoritmo: calcular a adesão semanal em percentual. Sinalizar para o profissional quando a dor sobe em dias seguidos. O sistema apenas sinaliza. Não faz diagnóstico.
• Cuidado: dados de saúde são sensíveis pela LGPD (Lei 13.709/2018). Use dados fictícios no trabalho.

MODELO DE DADOS
- 1 fisioterapeuta : N pacientes

- 1 paciente : N protocolos

- 1 fisioterapeuta : N protocolos

- 1 protocolo : N exercícios

Um registro liga um exercício a uma data.

- User (id, name, email, passwordHash, role: PHYSIO | PATIENT).
   
- Protocol (id, title, startDate, endDate, patientId, physioId, sessionsPerWeek, createdAt, archivedAt,updatedAt).
   
- Exercise (id, name, description,externalId, source, createdAt, updatedA).
   
- ExecutionRecord (id, protocolExerciseId, performedOn, completed, pain, createdAt, updatedAt).

- ProtocolExercise (id, protocolId, exerciseId, series, reps, position, instructions, createdAt, updatedAt).

- ConsentRecord (id, userId, termVersion, acceptanceDate, createdAt, updatedAt).

Uma regra de negócio importante: o registro é único por exercício e por dia. Assim o paciente pode corrigir o registro do mesmo dia sem criar duplicatas.

ROTAS DA API REST
• POST /auth/login: retorna o token JWT.
• GET, POST /pacientes e GET, PUT, DELETE /pacientes/{id}
• GET, POST /pacientes/{id}/protocolos e GET, PUT, DELETE /protocolos/{id}
• GET, POST /protocolos/{id}/exercicios e PUT, DELETE /exercicios/{id}
• GET /exercicios/{id}/video: o backend consulta a YouTube Data API e devolve o vídeo sugerido.
• PUT /exercicios/{id}/registros/{data}: cria ou atualiza o registro do dia (upsert).
• GET /protocolos/{id}/registros?inicio=&fim=
• GET /protocolos/{id}/adesao?semana=: adesão semanal em percentual.
• GET /pacientes/{id}/alertas: lista os sinais de dor em alta.

REGRAS DE NEGÓCIO
Adesão semanal:
adesão = (registros concluídos na semana / (exercícios do protocolo * 7)) * 100
OBS: Para exercícios que não são diários, ajuste o denominador pela frequência prescrita.

ALERTA DE DOR 
Sinalizar quando a dor registrada sobe em três dias seguidos. O texto da tela deve dizer "sinal para revisão profissional". O sistema não faz diagnóstico.

SEGURANÇA 
O paciente acessa apenas os próprios protocolos. O fisioterapeuta acessa apenas os pacientes que cadastrou. 

TELAS
1. Login.
2. Painel do terapeuta: lista de pacientes, com adesão da semana e alertas.
3. Detalhe do paciente: protocolos, exercícios e gráfico simples de adesão.
4. Formulário de protocolo e de exercício (com o vídeo sugerido pela API).
5. Tela do paciente: exercícios do dia, botão de concluído e campo de dor.