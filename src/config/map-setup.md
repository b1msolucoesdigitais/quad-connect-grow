# Configuração do Mapa

## Como Obter as Coordenadas e URL do Google Maps

### 1. Obter as Coordenadas
1. Acesse [Google Maps](https://maps.google.com)
2. Pesquise pelo endereço: "Av. Brasília, 2286 - Amaro Lanari, Cel. Fabriciano - MG"
3. Clique com o botão direito no local exato
4. Selecione as coordenadas que aparecem no topo
5. Copie as coordenadas (exemplo: -19.123456, -42.123456)

### 2. Obter a URL do iframe
1. No Google Maps, clique em "Compartilhar"
2. Selecione "Incorporar um mapa"
3. Copie a URL do iframe (começa com `https://www.google.com/maps/embed?pb=...`)

### 3. Atualizar o arquivo de configuração
No arquivo `src/config/company.ts`, atualize:

```typescript
map: {
  embedUrl: "URL_DO_IFRAME_AQUI",
  address: "Av. Brasília, 2286 - Amaro Lanari, Cel. Fabriciano - MG",
  coordinates: {
    lat: -19.123456, // Latitude real
    lng: -42.123456  // Longitude real
  }
}
```

## ⚠️ IMPORTANTE: Para obter a URL correta do mapa

1. Vá para [Google Maps](https://maps.google.com)
2. Pesquise pelo endereço exato: **"Av. Brasília, 2286 - Amaro Lanari, Cel. Fabriciano - MG"**
3. Clique no local correto no mapa
4. Clique em **"Compartilhar"**
5. Selecione **"Incorporar um mapa"**
6. Copie a URL completa que aparece no código iframe
7. Cole essa URL no campo `embedUrl` do arquivo `company.ts`

## Funcionalidades do Mapa
- **Visualização embutida**: Mapa interativo na seção de contato
- **Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Acessível**: Inclui título e atributos de acessibilidade
- **Simples**: Apenas mostra a localização, sem botões extras
