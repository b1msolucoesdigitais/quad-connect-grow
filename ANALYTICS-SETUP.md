# Configuração de Analytics - Quad Informática

## 📊 **Sistema de Analytics Implementado**

### 🎯 **Configuração Centralizada**
Todos os códigos de analytics estão centralizados no arquivo `src/config/analytics.ts` para fácil manutenção.

### 🔧 **Como Configurar**

#### **1. Google Analytics 4**
```typescript
googleAnalytics: {
  measurementId: "G-XXXXXXXXXX", // Seu GA4 ID
  enabled: true
}
```

#### **2. Google Tag Manager**
```typescript
googleTagManager: {
  containerId: "GTM-XXXXXXX", // Seu GTM ID
  enabled: true
}
```

#### **3. Facebook Pixel**
```typescript
facebookPixel: {
  pixelId: "XXXXXXXXXX", // Seu Pixel ID
  enabled: true
}
```

#### **4. Chatwoot (Já Configurado)**
```typescript
chatwoot: {
  enabled: true,
  websiteToken: 'twkLymYsvmXmUWk5G86HYLPm',
  baseUrl: 'https://chat.vipatende.com.br',
  position: 'right',
  type: 'standard',
  launcherTitle: 'Converse conosco'
}
```

#### **5. Hotjar**
```typescript
hotjar: {
  hjid: "XXXXXXXXXX", // Seu Hotjar ID
  hjsv: "6",
  enabled: false // Mude para true quando configurar
}
```

#### **6. LinkedIn Insight Tag**
```typescript
linkedin: {
  partnerId: "XXXXXXXXXX", // Seu LinkedIn Partner ID
  enabled: false // Mude para true quando configurar
}
```

#### **7. Microsoft Clarity**
```typescript
microsoftClarity: {
  projectId: "XXXXXXXXXX", // Seu Clarity Project ID
  enabled: false // Mude para true quando configurar
}
```

## 🚀 **Como Ativar/Desativar**

### **Para Ativar um Analytics:**
1. Abra `src/config/analytics.ts`
2. Substitua o ID pelo seu ID real
3. Mude `enabled: false` para `enabled: true`

### **Para Desativar um Analytics:**
1. Abra `src/config/analytics.ts`
2. Mude `enabled: true` para `enabled: false`

## 📋 **Analytics Disponíveis**

### ✅ **Google Analytics 4**
- **Função**: Rastreamento de visitantes e comportamento
- **Configuração**: Apenas o Measurement ID
- **Status**: Pronto para uso

### ✅ **Google Tag Manager**
- **Função**: Gerenciamento centralizado de tags
- **Configuração**: Apenas o Container ID
- **Status**: Pronto para uso

### ✅ **Facebook Pixel**
- **Função**: Rastreamento para campanhas do Facebook
- **Configuração**: Apenas o Pixel ID
- **Status**: Pronto para uso

### ✅ **Chatwoot**
- **Função**: Chat de atendimento
- **Configuração**: Já configurado
- **Status**: Ativo

### ⚠️ **Hotjar**
- **Função**: Gravação de sessões e heatmaps
- **Configuração**: Hotjar ID
- **Status**: Desativado por padrão

### ⚠️ **LinkedIn Insight Tag**
- **Função**: Rastreamento para campanhas do LinkedIn
- **Configuração**: Partner ID
- **Status**: Desativado por padrão

### ⚠️ **Microsoft Clarity**
- **Função**: Gravação de sessões e análise de comportamento
- **Configuração**: Project ID
- **Status**: Desativado por padrão

## 🔍 **Onde Obter os IDs**

### **Google Analytics 4**
1. Acesse [Google Analytics](https://analytics.google.com)
2. Vá em Admin > Data Streams
3. Copie o Measurement ID (G-XXXXXXXXXX)

### **Google Tag Manager**
1. Acesse [Google Tag Manager](https://tagmanager.google.com)
2. Copie o Container ID (GTM-XXXXXXX)

### **Facebook Pixel**
1. Acesse [Facebook Business Manager](https://business.facebook.com)
2. Vá em Events Manager > Pixels
3. Copie o Pixel ID

### **Hotjar**
1. Acesse [Hotjar](https://www.hotjar.com)
2. Vá em Settings > Site Settings
3. Copie o Site ID

### **LinkedIn Insight Tag**
1. Acesse [LinkedIn Campaign Manager](https://www.linkedin.com/campaignmanager)
2. Vá em Account Assets > Insight Tag
3. Copie o Partner ID

### **Microsoft Clarity**
1. Acesse [Microsoft Clarity](https://clarity.microsoft.com)
2. Crie um novo projeto
3. Copie o Project ID

## 📱 **Funcionalidades Implementadas**

### **Carregamento Automático**
- Scripts carregam automaticamente quando habilitados
- Carregamento assíncrono para não afetar performance
- Verificação de configuração antes do carregamento

### **GTM NoScript**
- Implementado no body para compatibilidade
- Carrega apenas quando GTM está habilitado

### **TypeScript Support**
- Tipos definidos para todas as funções globais
- Autocomplete e verificação de tipos

## 🎯 **Próximos Passos**

1. **Configure os IDs reais** no arquivo `analytics.ts`
2. **Ative os analytics desejados** mudando `enabled: false` para `enabled: true`
3. **Teste cada analytics** em ambiente de desenvolvimento
4. **Monitore o funcionamento** em produção

## 📁 **Arquivos Criados**

- ✅ `src/config/analytics.ts` - Configuração centralizada
- ✅ `src/components/Analytics.tsx` - Componente de carregamento
- ✅ `src/types/global.d.ts` - Tipos TypeScript
- ✅ `src/App.tsx` - Integração no app principal

## 🔒 **Privacidade e LGPD**

Todos os scripts respeitam as diretrizes de privacidade:
- Carregamento condicional
- Scripts assíncronos
- Configuração transparente
- Fácil desativação
