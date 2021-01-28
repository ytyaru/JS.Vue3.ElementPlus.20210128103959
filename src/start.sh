# CLIインストール
#   vue-cli　だと vue2 と古い版が入ってしまうので @vue/cli にして vue3 を入れること
#   -D フラグだと vue コマンドが認識されないので -g フラグでインストールすること
npm i -g @vue/cli
#   版を確認する
vue -V
#   最新版にする
vue add vue-next

# プロジェクト作成
PJ_NAME=my_project
vue create "${PJ_NAME}"
cd "${PJ_NAME}"
npm init -y
npm i -D element-plus

# ビルド＆実行
npm run serve

#npx webpack
#npx webpack serve
