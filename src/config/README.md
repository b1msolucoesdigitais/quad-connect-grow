# Configuração da Empresa

Este arquivo contém todas as informações configuráveis da empresa para facilitar a manutenção da landing page.

## Como Editar

Para alterar qualquer informação da empresa, edite o arquivo `company.ts` na pasta `src/config/`.

### Informações Disponíveis

#### Informações Básicas
- `name`: Nome da empresa
- `slogan`: Slogan da empresa
- `description`: Descrição geral da empresa

#### Logo
- `logo.url`: URL do logo da empresa
- `logo.alt`: Texto alternativo do logo

#### Favicon
- `favicon.url`: URL do favicon da empresa
- `favicon.alt`: Texto alternativo do favicon

#### Contato
- `contact.phone`: Telefone principal
- `contact.whatsapp`: Número do WhatsApp (apenas números)
- `contact.email`: Email de contato
- `contact.instagram`: Usuário do Instagram
- `contact.address`: Endereço completo
  - `street`: Rua e número
  - `neighborhood`: Bairro
  - `city`: Cidade
  - `state`: Estado

#### Horário de Funcionamento
- `businessHours.weekdays`: Horário de segunda a sexta
- `businessHours.saturday`: Horário de sábado
- `businessHours.sunday`: Horário de domingo

#### Serviços
- `services`: Array com todos os serviços oferecidos

#### Estatísticas
- `stats.yearsExperience`: Anos de experiência
- `stats.clientsServed`: Número de clientes atendidos
- `stats.serviceArea`: Área de atendimento

#### URLs
- `urls.website`: Site da empresa
- `urls.whatsapp`: URL do WhatsApp
- `urls.phone`: URL para ligação
- `urls.instagram`: URL do Instagram

#### Mapa
- `map.embedUrl`: URL do iframe do Google Maps
- `map.address`: Endereço completo para exibição
- `map.coordinates`: Coordenadas geográficas
  - `lat`: Latitude
  - `lng`: Longitude

#### Copyright
- `copyright`: Texto do copyright

## Exemplo de Edição

Para alterar o telefone da empresa:

```typescript
contact: {
  phone: "(31) 9999-9999", // Novo telefone
  whatsapp: "5531999999999", // Novo WhatsApp
  // ... outras informações
}
```

## Componentes Atualizados

Os seguintes componentes foram atualizados para usar as variáveis de configuração:

- `Header.tsx`: Logo, telefone e WhatsApp
- `Hero.tsx`: Slogan, descrição e estatísticas
- `About.tsx`: Nome da empresa, localização e horários
- `Services.tsx`: Links do WhatsApp
- `Contact.tsx`: Todas as informações de contato
- `Footer.tsx`: Todas as informações da empresa

## Benefícios

1. **Manutenção Centralizada**: Todas as informações em um só lugar
2. **Consistência**: Garante que as informações sejam iguais em toda a aplicação
3. **Facilidade**: Não precisa procurar em vários arquivos para fazer alterações
4. **Reutilização**: As informações podem ser facilmente reutilizadas em novos componentes
