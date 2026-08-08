const pointExchangeData = [
  { departurePoint: 'Sポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.25', route: '1,000ポイント〜', notes: '阪急阪神グループ' },
  { departurePoint: 'EZOポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.333', route: '3ポイント〜', notes: '北海道共通ポイント' },
  { departurePoint: 'おきでんEポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '100ポイント〜', notes: '沖縄電力' },
  { departurePoint: 'ヤマダポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.25', route: '4,000ポイント〜', notes: 'ヤマダデンキ' },
  { departurePoint: 'はぴeポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '100ポイント〜', notes: '関西電力' },
  { departurePoint: 'よんでんポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '100ポイント〜', notes: '四国電力' },
  { departurePoint: 'スギポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.2', route: '500点〜', notes: 'スギ薬局' },
  { departurePoint: 'TOKYU POINT (ANAカード)', arrivalPoint: 'ANAマイル', exchangeRate: '0.75', route: '1,000ポイント〜', notes: 'ANA TOKYU POINT ClubQ PASMO マスターカード会員' },
  { departurePoint: 'TOKYU POINT (一般)', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '1,000ポイント〜', notes: '上記以外のカード会員' },
  { departurePoint: 'ハートワンポイント', arrivalPoint: 'ANAマイル', exchangeRate: '87.5%〜95%', route: '200ポイント〜', notes: '500pt→450(90%)、1,000pt→950(95%)と交換数でレート上昇。2026/3/31サービス終了' },
  { departurePoint: 'ショップdeポイント (PiTaPa)', arrivalPoint: 'ANAマイル', exchangeRate: '0.04', route: '500ポイント〜', notes: '-' },
  { departurePoint: 'ビーム（ポイント）', arrivalPoint: 'ANAマイル', exchangeRate: '0.25', route: '400ポイント〜', notes: 'BEAM' },
  { departurePoint: 'ブルーチップ', arrivalPoint: 'ANAマイル', exchangeRate: '-', route: 'ギフト券1枚〜', notes: '-' },
  { departurePoint: 'VeryMatch ポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.25', route: '4ポイント〜', notes: '※2025年4月4日終了（積算対象外）' },
  { departurePoint: 'マイ・グリーンスタンプ', arrivalPoint: 'ANAマイル', exchangeRate: '0.25', route: '4,000ポイント〜', notes: '-' },
  { departurePoint: 'マツキヨココカラポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.2', route: '5ポイント〜', notes: 'マツモトキヨシ' },
  { departurePoint: '名鉄ミューズポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.6', route: '100ポイント〜', notes: '名鉄' },
  { departurePoint: 'MENICOiN', arrivalPoint: 'ANAマイル', exchangeRate: '0.333', route: '300COiN〜', notes: 'メニコン' },
  { departurePoint: 'モラタメポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.333', route: '3ポイント〜', notes: '-' },
  { departurePoint: 'IHG One Rewards', arrivalPoint: 'ANAマイル', exchangeRate: '0.2', route: '10,000ポイント〜', notes: '-' },
  { departurePoint: 'シャングリ・ラ サークル ポイント', arrivalPoint: 'ANAマイル', exchangeRate: '1', route: '500ポイント〜', notes: '-' },
  { departurePoint: 'インペリアルクラブカードポイント', arrivalPoint: 'ANAマイル', exchangeRate: '10', route: '1,000ポイント〜', notes: 'UC提携（帝国ホテル）。※ポイント単価が特別設計されているため見かけ上のレートが高い' },
  { departurePoint: 'ヒルトン・オナーズ ポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.1', route: '10,000ポイント〜', notes: '※システム不具合により一時停止中' },
  { departurePoint: 'ワールド オブ ハイアット ポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.4', route: '2.5ポイント〜', notes: '-' },
  { departurePoint: 'フォートラベルポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.05', route: '1,000ポイント〜', notes: '-' },
  { departurePoint: 'ホテリスタ (アップルポイント)', arrivalPoint: 'ANAマイル', exchangeRate: '0.333', route: '3ポイント〜', notes: '-' },
  { departurePoint: 'ソネットポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.4', route: '250ポイント〜', notes: '-' },
  { departurePoint: 'ドットマネー', arrivalPoint: 'ANAマイル', exchangeRate: '0.283', route: '300マネー〜', notes: '※メンテナンスのため一時停止中' },
  { departurePoint: 'ネットマイル', arrivalPoint: 'ANAマイル', exchangeRate: '0.185', route: '1,080mile〜', notes: '-' },
  { departurePoint: 'PeXポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.03', route: '1,000ポイント〜', notes: '-' },
  { departurePoint: 'ポイントインカム', arrivalPoint: 'ANAマイル', exchangeRate: '0.033', route: '3,000ポイント〜', notes: '-' },
  { departurePoint: 'ポイントタウン', arrivalPoint: 'ANAマイル', exchangeRate: '0.285', route: '350ポイント〜', notes: '交換数によりレート変動なし（比率は一定）' },
  { departurePoint: 'モッピー', arrivalPoint: 'ANAマイル', exchangeRate: '0.333', route: '1,500ポイント〜', notes: '-' },
  { departurePoint: 'OKB大垣共立銀行サンクスポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.05', route: '20ポイント〜', notes: '※2025年2月28日提携終了' },
  { departurePoint: 'J-マイレージポイント (十六銀行)', arrivalPoint: 'ANAマイル', exchangeRate: '0.3', route: '100ポイント〜', notes: '-' },
  { departurePoint: '日本生命サンクスマイル', arrivalPoint: 'ANAマイル', exchangeRate: '0.35', route: '2,000サンクスマイル〜', notes: '※2025年12月30日受付終了（終了済み）' },
  { departurePoint: 'マネックスポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.25', route: '4ポイント〜', notes: '-' },
  { departurePoint: 'みずほ銀行ポイント (ANAカード)', arrivalPoint: 'ANAマイル', exchangeRate: '3.5', route: '100ポイント〜', notes: 'みずほマイレージクラブカード/ANA会員。200pt以上から交換可' },
  { departurePoint: 'みずほ銀行ポイント (一般)', arrivalPoint: 'ANAマイル', exchangeRate: '3', route: '200ポイント〜', notes: '上記以外の会員。200pt以上から交換可' },
  { departurePoint: 'りそなクラブポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '100ポイント〜', notes: 'りそな・埼玉りそな・関西みらい・みなと銀行' },
  { departurePoint: 'KIX-ITMカード (フライトPoint)', arrivalPoint: 'ANAマイル', exchangeRate: '2.5', route: '40ポイント〜', notes: '関空・伊丹' },
  { departurePoint: 'メトポ (ANA To Me CARD)', arrivalPoint: 'ANAマイル', exchangeRate: '0.9', route: '100ポイント〜', notes: 'ANA To Me CARD PASMO JCB (ソラチカ)' },
  { departurePoint: 'メトポ (一般 To Me CARD)', arrivalPoint: 'ANAマイル', exchangeRate: '0.6', route: '1,000ポイント〜', notes: 'ソラチカ以外のカード。家族カード/PASMOのみは1,000pt→500マイル(50%)' },
  { departurePoint: '得タクポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.2', route: '1,000ポイント〜', notes: '-' },
  { departurePoint: 'アメリカン・エキスプレス', arrivalPoint: 'ANAマイル', exchangeRate: '1', route: '1ポイント〜', notes: '一部カードは2pt→1マイル(50%)。※一部カードでANA移行停止中' },
  { departurePoint: 'アプラスポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.6', route: '1ポイント〜', notes: '-' },
  { departurePoint: '出光プラスポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '2ポイント〜', notes: '-' },
  { departurePoint: 'NTTグループカードポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.2', route: '10ポイント〜', notes: '※2025年6月30日サービス終了（終了済み）' },
  { departurePoint: 'ENEOSカードポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.4', route: '1,000ポイント〜', notes: '-' },
  { departurePoint: 'エムアイポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.25', route: '2,000ポイント〜', notes: '三越伊勢丹' },
  { departurePoint: 'オリコポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.6', route: '5ポイント〜', notes: '-' },
  { departurePoint: 'KCカードポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.4', route: '100ポイント〜', notes: '-' },
  { departurePoint: '京急プレミアポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.4', route: '1,000ポイント〜', notes: '-' },
  { departurePoint: 'JCBカード (Oki Doki)', arrivalPoint: 'ANAマイル', exchangeRate: '0.6', route: '1ポイント〜', notes: '-' },
  { departurePoint: 'ラブリィポイント (ジャックス)', arrivalPoint: 'ANAマイル', exchangeRate: '0.6', route: '5ポイント〜', notes: '-' },
  { departurePoint: 'JRタワースクエアカードのポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.333', route: '3,000ポイント〜', notes: 'ANA Kitaca' },
  { departurePoint: 'JRキューポ', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '1,000ポイント〜', notes: 'JQ SUGOCA ANA' },
  { departurePoint: 'JAカード (わいわい/ゴールド)', arrivalPoint: 'ANAマイル', exchangeRate: '3', route: '500ポイント〜', notes: '-' },
  { departurePoint: 'セブンカードのポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '3,000ポイント〜', notes: '-' },
  { departurePoint: '永久不滅ポイント (セゾン/UC)', arrivalPoint: 'ANAマイル', exchangeRate: '3', route: '1ポイント〜', notes: 'セゾンカード・UCカード' },
  { departurePoint: '永久不滅ポイント (ヤマダLABI ANA)', arrivalPoint: 'ANAマイル', exchangeRate: '3.125', route: '1ポイント〜', notes: 'ヤマダLABI ANAマイレージクラブカード' },
  { departurePoint: 'ダイナースクラブ リワードポイント', arrivalPoint: 'ANAマイル', exchangeRate: '1', route: '1ポイント〜', notes: '-' },
  { departurePoint: 'タカシマヤポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.25', route: '2,000ポイント〜', notes: 'ゴールド含む' },
  { departurePoint: 'TOYOTA TS CUBIC CARDポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.25', route: '4ポイント〜', notes: '-' },
  { departurePoint: '日産ポイント', arrivalPoint: 'ANAマイル', exchangeRate: '', route: '', notes: '移行可能との記載のみでレート表記なし' },
  { departurePoint: '大丸ポイント (博多大丸)', arrivalPoint: 'ANAマイル', exchangeRate: '0.416', route: '1,200ポイント〜', notes: '※2025年8月31日サービス終了（終了済み）' },
  { departurePoint: 'ワールドプレゼント (VJA 個人)', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '1ポイント〜', notes: 'VJAグループ各社（個人会員）' },
  { departurePoint: 'ワールドプレゼント (VJA 法人)', arrivalPoint: 'ANAマイル', exchangeRate: '2.5', route: '1ポイント〜', notes: 'VJAグループ各社（法人会員）' },
  { departurePoint: 'JP BANK カードポイント (VISA/Master)', arrivalPoint: 'ANAマイル', exchangeRate: '3', route: '1ポイント〜', notes: '-' },
  { departurePoint: 'JP BANK カードポイント (JCB)', arrivalPoint: 'ANAマイル', exchangeRate: '0.6', route: '1ポイント〜', notes: '-' },
  { departurePoint: 'サンクスポイント (ライフカード)', arrivalPoint: 'ANAマイル', exchangeRate: '2.5', route: '1ポイント〜', notes: '参加登録費・移行手数料無料' },
  { departurePoint: 'UCカード', arrivalPoint: 'ANAマイル', exchangeRate: '3', route: '1ポイント〜', notes: '永久不滅ポイントまたはUCポイント' },
  { departurePoint: 'Vポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.7', route: 'V→JRキューポ→永久不滅→ANA', notes: '（元記載のまま）' },
  { departurePoint: '楽天ポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '2ポイント〜', notes: '期間限定ポイントの交換可否はANA公式ページに明確な#N/A' },
  { departurePoint: 'Gポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.333', route: '30Gポイント〜', notes: 'Gポイント側で1日20,000Gまでの申請制限あり（サイト注記）' },
  { departurePoint: 'nimocaポイント（ANA VISA nimoca）', arrivalPoint: 'ANAマイル', exchangeRate: '0.7', route: '10nimocaポイント〜', notes: '（元の「交換機が必要」等の記載はANA公式一覧では確認できないため削除）' },
  { departurePoint: 'Vポイント（別表記）', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '500ポイント〜', notes: '「みずほルートで70%」等の追加ルートはANA公式一覧で確認できず' },
  { departurePoint: '楽天ポイント（重複）', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '2ポイント〜', notes: '（重複エントリ：元の記載どおり）' },
  { departurePoint: 'nanacoポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '500ポイント〜', notes: 'セブン系利用者は端数調整がしやすい等の運用上の利便性あり' },
  { departurePoint: 'エポスポイント', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '1エポスポイント〜', notes: '変更予定の注記あり（ANA公式一覧の注記に基づく）' },
  { departurePoint: 'Marriott Bonvoy（マリオット）', arrivalPoint: 'ANAマイル', exchangeRate: '0.333', route: '3ポイント〜', notes: '「6万Pt→2.5万マイル（約41.6%）」という表現はANA公式一覧では確認できず、公式は3pt→1mile表記' },
  { departurePoint: 'dポイント', arrivalPoint: 'ANAマイル', exchangeRate: '交換不可', route: '直接ルートなし', notes: 'dポイントからANAへ直接交換は不可（ANA一覧に#N/A）' },
  { departurePoint: 'Pontaポイント', arrivalPoint: 'ANAマイル', exchangeRate: '交換不可', route: '直接ルートなし', notes: 'PontaはANA直接交換の項目に#N/A（JALなど他社優勢）' },
  { departurePoint: '楽天ポイント（「50pt〜」表記をしていた行）', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '2ポイント〜', notes: '最小交換単位・月間上限はANA公式一覧に明確#N/A（元の「50pt〜」表記はANA一覧で裏付けなしのため修正）' },
  { departurePoint: 'Vポイント（「50〜70% / みずほルート終了」等を主張していた行）', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '500ポイント〜', notes: 'みずほルート（70%）や「2026/01/21 新規終了」などの追記事項はANA公式一覧で確認できないため削除' },
  { departurePoint: 'nanacoポイント（重複）', arrivalPoint: 'ANAマイル', exchangeRate: '0.5', route: '500ポイント〜', notes: '（重複行：元の記載どおり）' },
  { departurePoint: 'WAON POINT', arrivalPoint: 'ANAマイル', exchangeRate: '', route: 'ANA公式ページに直接交換の#N/A', notes: 'ANA公式一覧にWAON直接交換の掲載なしのため、直接交換ルートは確認不可（提示の「40%」等は裏付けできない）' },
  { departurePoint: 'Pontaポイント', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '2ポイント〜', notes: '年に数回の20%増量CP時が狙い目' },
  { departurePoint: 'dポイント', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '1000ポイント〜', notes: '定期的な10〜15%増量CPがある' },
  { departurePoint: 'JRE POINT', arrivalPoint: 'JALマイル', exchangeRate: '0.33', route: '1500ポイント〜', notes: 'JALカードショッピングマイル・プレミアムに入会の場合、66%。鉄道利用で最も高効率にマイル化可能' },
  { departurePoint: 'WAON POINT', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '1000ポイント〜', notes: '' },
  { departurePoint: '楽天ポイント', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '50ポイント〜', notes: '上限は20,000ポイント/月。移行可能ポイント数は5000ポイント/回' },
  { departurePoint: '永久不滅ポイント', arrivalPoint: 'JALマイル', exchangeRate: '2.5', route: '200ポイント〜', notes: '1,000円＝1ポイント＝2.5マイル' },
  { departurePoint: 'マリオット・ボンヴォイ', arrivalPoint: 'JALマイル', exchangeRate: '0.33', route: '3ポイント〜', notes: '60,000ポイント移行するごとに、ボーナスとして5,000マイル積算。1日当たりの移行ポイント数：3,000ポイント～240,000ポイント' },
  { departurePoint: 'Gポイント', arrivalPoint: 'JALマイル', exchangeRate: '0.333', route: '30Gポイント〜', notes: '30Gポイントで10マイル' },
  { departurePoint: 'ちょびリッチ', arrivalPoint: 'JALマイル', exchangeRate: '0.25', route: '800ちょびポイント〜', notes: '800ちょびポイントで200マイル' },
  { departurePoint: 'ネットマイル', arrivalPoint: 'JALマイル', exchangeRate: '0.167', route: '6mile〜', notes: '6mileで1マイル' },
  { departurePoint: 'クラブネッツ CNポイント', arrivalPoint: 'JALマイル', exchangeRate: '0.25', route: '400CNポイント〜', notes: '400CNポイントで100マイル' },
  { departurePoint: 'ポイント交換サービスPeX', arrivalPoint: 'JALマイル', exchangeRate: '0.025', route: '4,000PeXポイント〜', notes: '4,000PeXポイントで100マイル' },
  { departurePoint: '静銀セゾンカード (永久不滅ポイント)', arrivalPoint: 'JALマイル', exchangeRate: '3', route: '200ポイント〜', notes: '永久不滅ポイント200ポイントごとに600マイル' },
  { departurePoint: 'OCカード', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '500OCポイント〜', notes: '500OCポイントで250マイル' },
  { departurePoint: 'エポスカード (エポスポイント)', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '2エポスポイント〜', notes: '2エポスポイントで1マイル' },
  { departurePoint: 'グローバルポイント', arrivalPoint: 'JALマイル', exchangeRate: '2', route: '200ポイント〜', notes: '200グローバルポイントで400マイル' },
  { departurePoint: 'わくわくポイント', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '1,000ポイント〜', notes: '1,000ポイントで500マイル' },
  { departurePoint: 'アプラスカード', arrivalPoint: 'JALマイル', exchangeRate: '0.6', route: '1,000アプラスポイント〜', notes: '1,000アプラスポイントで600マイル' },
  { departurePoint: 'イオンカード (WAON POINT)', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '1,000WAON POINT〜', notes: '1,000WAON POINTで500マイル' },
  { departurePoint: 'OCSカード (OCSお楽しみポイント)', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '500OCSお楽しみポイント〜', notes: '500OCSお楽しみポイントで250マイル' },
  { departurePoint: 'フォートラベル', arrivalPoint: 'JALマイル', exchangeRate: '0.06', route: '1,000フォートラベルポイント〜', notes: '1,000フォートラベルポイントで60マイル' },
  { departurePoint: '帝国ホテル「インペリアルクラブ 」', arrivalPoint: 'JALマイル', exchangeRate: '10', route: '1,000ポイント〜', notes: '1,000ポイントで10,000マイル (特定の特典レートの可能性あり)' },
  { departurePoint: 'Point Income', arrivalPoint: 'JALマイル', exchangeRate: '0.0333', route: '4500ポイント〜', notes: '積算条件は詳細をご覧ください' },
  { departurePoint: 'PRESIDENT CARD', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '1000ポイント〜', notes: '積算条件は詳細をご覧ください' },
  { departurePoint: '日産カード', arrivalPoint: 'JALマイル', exchangeRate: '', route: '', notes: '積算条件は詳細をご覧ください' },
  { departurePoint: 'NCカード', arrivalPoint: 'JALマイル', exchangeRate: '-', route: '-', notes: 'ポイント移行でマイルがたまる（詳細不明）' },
  { departurePoint: 'JALカード OPクレジット/小田急ポイント', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '2,000小田急ポイント〜', notes: '2,000ポイントで1,000マイル' },
  { departurePoint: 'オリコカード', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '1,000オリコポイント〜', notes: '1,000ポイントで500マイル' },
  { departurePoint: '九州日本信販カード', arrivalPoint: 'JALマイル', exchangeRate: '3', route: '200ポイント〜', notes: '200ポイントで600マイル（高レートのため詳細確認推奨）' },
  { departurePoint: 'JCBカード', arrivalPoint: 'JALマイル', exchangeRate: '0.6', route: '2,500J-POINT〜', notes: '2,500ポイントで1,500マイル' },
  { departurePoint: 'ジャックスカード', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '1,000ラブリィポイント〜', notes: '1,000ポイントで500マイル' },
  { departurePoint: 'JALカード Suica', arrivalPoint: 'JALマイル', exchangeRate: '0.667', route: '最大1,500JRE POINT〜', notes: '最大1,500ポイントで1,000マイル' },
  { departurePoint: 'セゾンカード', arrivalPoint: 'JALマイル', exchangeRate: '2.5', route: '200ポイント〜', notes: '200ポイントで500マイル（高レートのため詳細確認推奨）' },
  { departurePoint: 'ティーエスキュービックカード（ポイントプラス）', arrivalPoint: 'JALマイル', exchangeRate: '0.25', route: '5,000ポイント〜', notes: '5,000ポイントで1,250マイル' },
  { departurePoint: 'TOKYU POINTサービス（JMB機能付き）', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '2,000TOKYU POINT〜', notes: '2,000ポイントで1,000マイル' },
  { departurePoint: 'TOKYU CARD/TOKYU POINT CARD', arrivalPoint: 'JALマイル', exchangeRate: '0.3', route: '1,000TOKYU POINT〜', notes: '1,000ポイントで300マイル' },
  { departurePoint: 'トヨタファイナンス・マイレージプラン', arrivalPoint: 'JALマイル', exchangeRate: '0.4', route: '1,000ポイント〜', notes: '1,000ポイントで400マイル' },
  { departurePoint: 'トワライズ（旧山陰信販）カード', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '500わくわくポイント〜', notes: '500ポイントで250マイル' },
  { departurePoint: '日専連カード', arrivalPoint: 'JALマイル', exchangeRate: '移行ルートあり', route: '100マイル〜', notes: '積算条件は詳細をご覧ください' },
  { departurePoint: 'NICOSカード', arrivalPoint: 'JALマイル', exchangeRate: '2', route: '200ポイント〜', notes: '積算条件は詳細をご覧ください' },
  { departurePoint: 'JMB nimoca/nimocaポイント', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '2nimocaポイント〜', notes: '2ポイントで1マイル' },
  { departurePoint: 'ポケットカード', arrivalPoint: 'JALマイル', exchangeRate: '1.5', route: '300ポイント〜', notes: '' },
  { departurePoint: 'マツダm′z PLUSカード', arrivalPoint: 'JALマイル', exchangeRate: '0.25', route: '4000ポイント〜', notes: '' },
  { departurePoint: '三菱UFJ銀行 スーパーICカード/ICクレジットカード', arrivalPoint: 'JALマイル', exchangeRate: '2', route: '200三菱UFJポイント〜', notes: '200ポイントで400マイル（高レートのため詳細確認推奨）' },
  { departurePoint: 'UCSカード', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '1,000Uポイント〜', notes: '1,000ポイントで500マイル' },
  { departurePoint: 'UCカード', arrivalPoint: 'JALマイル', exchangeRate: '2.5', route: '200UCポイント〜', notes: '200ポイントで500マイル（高レートのため詳細確認推奨）' },
  { departurePoint: 'りそなデビットカード〈JMB〉', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '200円ごと', notes: 'ご利用金額200円ごとに1マイル' },
  { departurePoint: 'りそなカード《セゾン》', arrivalPoint: 'JALマイル', exchangeRate: '2', route: '200ポイント〜', notes: '200ポイントで400マイル（高レートのため詳細確認推奨）' },
  { departurePoint: 'JMBローソンPontaカードVisa/Pontaポイント', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '2Pontaポイント〜', notes: '2Pontaポイントで1マイル' },
  { departurePoint: '出光クレジット株式会社', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '1,000プラスポイント〜', notes: '出光カードのプラスポイント1000ポイントごとに500マイル' },
  { departurePoint: 'エムアイポイント', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '3,000エムアイポイント〜', notes: '3,000エムアイポイントで1500マイル' },
  { departurePoint: 'アメリカン・エキスプレス', arrivalPoint: 'JALマイル', exchangeRate: '0.333', route: '3000ポイント〜', notes: 'メンバーシップ・リワード・プラスに登録済みの方は2,500ポイント＝1,000マイル' },
  { departurePoint: 'ダイナースクラブ', arrivalPoint: 'JALマイル', exchangeRate: '0.4', route: '2,500ポイント〜', notes: '2,500ポイントで1000マイル' },
  { departurePoint: 'くまポンbyGMO', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '200円ごと', notes: 'クーポンご購入200円ごとに1マイル' },
  { departurePoint: 'おトクなモニター情報サイト「とくモニ」', arrivalPoint: 'JALマイル', exchangeRate: '-', route: '-', notes: '積算条件は詳細をご覧ください' },
  { departurePoint: 'ホットペッパー グルメ', arrivalPoint: 'JALマイル', exchangeRate: '-', route: '-', notes: 'ネット予約後のご来店1件ごとに20マイル積算' },
  { departurePoint: 'ACCORDIA GOLF ポイントプログラム', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '2,000ポイント〜', notes: '2000ポイントごとに1000マイル' },
  { departurePoint: 'JR九州 (JRキューポからの交換)', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '1,000ポイント〜', notes: 'JRキューポからの交換１回1000ポイントごとに500マイル' },
  { departurePoint: 'HoteLux', arrivalPoint: 'JALマイル', exchangeRate: '4', route: '1ポイント〜', notes: '会員ランクによってさらに積算' },
  { departurePoint: 'ＪＵＮ', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '2000ポイント〜', notes: '' },
  { departurePoint: 'Marriott Bonvoy', arrivalPoint: 'JALマイル', exchangeRate: '0.333', route: '3Marriott Bonvoyポイント〜', notes: '3Marriott Bonvoyポイントで1マイル' },
  { departurePoint: 'i2iPoint（i2iポイント）', arrivalPoint: 'JALマイル', exchangeRate: '1', route: '100円ごと', notes: 'ポイント交換100円ごとに1マイル' },
  { departurePoint: 'ウィルズ プレミアム優待倶楽部', arrivalPoint: 'JALマイル', exchangeRate: '0.2', route: '500コイン〜', notes: 'WILLsCoin500コインごとに100マイル' },
  { departurePoint: 'EZOCA', arrivalPoint: 'JALマイル', exchangeRate: '0.333', route: '300EZOポイント〜', notes: '' },
  { departurePoint: 'CLUB Panasonic', arrivalPoint: 'JALマイル', exchangeRate: '0.25', route: '300コイン〜', notes: '' },
  { departurePoint: 'タイムズクラブ', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '2タイムズポイント〜', notes: '2タイムズポイントで1マイル' },
  { departurePoint: '宅配水のクリクラ', arrivalPoint: 'JALマイル', exchangeRate: '0.0789', route: '3,800ポイント〜', notes: '商品ご購入ポイント' },
  { departurePoint: 'トヨタレンタカーメンバー (レンタカーマイル)', arrivalPoint: 'JALマイル', exchangeRate: '10', route: '10レンタカーマイル〜', notes: '10レンタカーマイルで100マイル' },
  { departurePoint: 'ドットマネー', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '500マネー〜', notes: '-' },
  { departurePoint: 'ポイントタウン', arrivalPoint: 'JALマイル', exchangeRate: '0.4', route: '1,250ポイント〜', notes: '-' },
  { departurePoint: 'モッピー', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '1,000ポイント〜', notes: '-' },
  { departurePoint: '和多利 Wポイントカード', arrivalPoint: 'JALマイル', exchangeRate: '-', route: '-', notes: '積算条件は詳細をご覧ください' },
  { departurePoint: 'グリーンスタンプ', arrivalPoint: 'JALマイル', exchangeRate: '-', route: '-', notes: 'ポイント移行でマイルがたまる' },
  { departurePoint: 'JTBトラベルポイント', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '5,000ポイント〜', notes: '-' },
  { departurePoint: 'PiTaPa (ショップdeポイント)', arrivalPoint: 'JALマイル', exchangeRate: '0.04', route: '500ポイント〜', notes: '-' },
  { departurePoint: 'ALL - Accor Live Limitless (リワードポイント)', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '4,000ポイント〜', notes: '-' },
  { departurePoint: 'THANKS GIFT', arrivalPoint: 'JALマイル', exchangeRate: '-', route: '-', notes: '積算条件は詳細をご覧ください' },
  { departurePoint: 'CDエナジーダイレクト (カテエネポイント)', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '100ポイント〜', notes: '-' },
  { departurePoint: 'ハピタス', arrivalPoint: 'JALマイル', exchangeRate: '0.5', route: '3,000ポイント〜', notes: '-' },
  { departurePoint: 'KIX-ITMカード (フライトポイント)', arrivalPoint: 'JALマイル', exchangeRate: '2.5', route: '40フライトポイント〜', notes: '40フライトポイントで100マイル' },
  { departurePoint: 'ちょコム', arrivalPoint: 'JALマイル', exchangeRate: '0.3', route: '100ポイント〜', notes: '-' },
  { departurePoint: 'So-net (ソネットポイント)', arrivalPoint: 'JALマイル', exchangeRate: '0.4', route: '250ポイント〜', notes: '-' },
];

document.addEventListener('DOMContentLoaded', () => {
    const departureSelectsContainer = document.getElementById('departure-selects-container');
    const arrivalSelect = document.querySelector('.arrival-select select');
    const resultsContainer = document.querySelector('.results-container');
    const resultsCard = document.querySelector('.results-card');
    const emptyStateCard = document.querySelector('.empty-state-card');

    // Get unique departure and arrival points
    const departurePoints = [...new Set(pointExchangeData.map(item => item.departurePoint))].sort();
    const arrivalPoints = [...new Set(pointExchangeData.map(item => item.arrivalPoint))].sort();

    function populateDepartureSelect(selectElement) {
        selectElement.innerHTML = '<option value="">すべての出発元を表示</option>';
        departurePoints.forEach(point => {
            const option = document.createElement('option');
            option.value = point;
            option.textContent = point;
            selectElement.appendChild(option);
        });
    }

    // Populate initial selects
    const initialDepartureSelect = document.querySelector('.departure-select select');
    populateDepartureSelect(initialDepartureSelect);

    arrivalPoints.forEach(point => {
        const option = document.createElement('option');
        option.value = point;
        option.textContent = point;
        arrivalSelect.appendChild(option);
    });

    // Handle selection changes
    function filterData() {
        const departureSelects = document.querySelectorAll('.departure-select select');
        const selectedDepartures = Array.from(departureSelects)
            .map(select => select.value)
            .filter(val => val !== '');
            
        const selectedArrival = arrivalSelect.value;

        if (selectedDepartures.length === 0 && !selectedArrival) {
            emptyStateCard.style.display = 'flex';
            resultsCard.style.display = 'none';
            return;
        }

        const filtered = pointExchangeData.filter(item => {
            const matchDeparture = selectedDepartures.length === 0 || selectedDepartures.includes(item.departurePoint);
            const matchArrival = !selectedArrival || item.arrivalPoint === selectedArrival;
            return matchDeparture && matchArrival;
        });

        const parseRate = (rateStr) => {
            if (!rateStr || rateStr === '-' || rateStr === '交換不可' || rateStr === '移行ルートあり') return 0;
            const match = String(rateStr).match(/[\d.]+/);
            if (match) {
                let num = parseFloat(match[0]);
                if (String(rateStr).includes('%')) {
                    num = num / 100;
                }
                return num;
            }
            return 0;
        };

        filtered.sort((a, b) => parseRate(b.exchangeRate) - parseRate(a.exchangeRate));

        renderResults(filtered);
    }

    function renderResults(results) {
        resultsContainer.innerHTML = '';
        
        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="no-results">該当する交換ルートが見つかりませんでした。別の条件をお試しください。</div>';
        } else {
            results.forEach(route => {
                const routeCard = document.createElement('div');
                routeCard.className = 'route-card';
                routeCard.innerHTML = `
                    <div class="route-header">
                        <span class="route-point">${route.departurePoint}</span>
                        <svg class="route-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                        <span class="route-point">${route.arrivalPoint}</span>
                    </div>
                    <div class="route-details">
                        <div class="route-detail-item">
                            <span class="label">交換レート:</span>
                            <span class="value">${(function(rateText) {
                                if (!rateText || rateText === '-' || rateText === '交換不可' || rateText === '移行ルートあり') return rateText;
                                if (String(rateText).includes('%')) return rateText;
                                const num = parseFloat(rateText);
                                if (!isNaN(num)) {
                                    return Number((num * 100).toFixed(2)) + '%';
                                }
                                return rateText;
                            })(route.exchangeRate)}</span>
                        </div>
                        <div class="route-detail-item">
                            <span class="label">ルート条件:</span>
                            <span class="value">${route.route || '-'}</span>
                        </div>
                        ${route.notes && route.notes !== '-' ? `
                        <div class="route-detail-item notes">
                            <span class="label">備考:</span>
                            <span class="value">${route.notes}</span>
                        </div>
                        ` : ''}
                    </div>
                `;
                resultsContainer.appendChild(routeCard);
            });
        }
        
        emptyStateCard.style.display = 'none';
        resultsCard.style.display = 'block';
    }

    departureSelectsContainer.addEventListener('change', (e) => {
        if (e.target.tagName === 'SELECT') {
            const selects = document.querySelectorAll('.departure-select select');
            const lastSelect = selects[selects.length - 1];
            
            // If the changed select is the last one and it has a value, add a new one
            if (e.target === lastSelect && e.target.value !== '') {
                const newWrapper = document.createElement('div');
                newWrapper.className = 'select-wrapper departure-select';
                newWrapper.innerHTML = `
                    <select></select>
                    <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 9L12 15L18 9" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                `;
                populateDepartureSelect(newWrapper.querySelector('select'));
                departureSelectsContainer.appendChild(newWrapper);
            }
            // Filter data any time a select changes
            filterData();
        }
    });

    arrivalSelect.addEventListener('change', filterData);
});
