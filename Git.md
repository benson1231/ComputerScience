### [參考網站](https://www.codecademy.com/learn/learn-git/modules/learn-git-git-workflow-u/cheatsheet)

# 1. basic git setting
### Get git version
```bash
git --version
```
### Initialize a Git repository
```bash
git init
```
### Set author name and email
```bash
git config --global user.name "USER_NAME"
git config --global user.email "USER_EMAIL"
```
### List Git configurations
```bash
git config --list
```
### Add a Git alias
```bash
git config --global alias.glop "log --pretty=format:'%h %s' --graph"
# 使用別名顯示提交歷史：
git glop
```

# 2. basic git command
### git status
```bash
git status
```
### git add
```bash
git add FILE_NAME        # 添加指定文件
git add *.md             # 添加所有 Markdown 文件
git add .                # 添加所有文件
```
### git commit
```bash
git commit -m "UPDATE_MESSAGE"   # 提交並附加訊息
git commit --amend               # 修改上一個提交
```
### git log
```bash
git log                     # 顯示詳細提交歷史
git log --oneline           # 每個提交顯示一行
git log --oneline --graph   # 以圖形方式顯示提交歷史
```
### git diff
```bash
git diff FILE_NAME                  # 查看文件改動
git diff COMMIT_SHA -- FILE_NAME    # 比較指定提交版本與文件
```
### Restore file to last commit
```bash
git restore FILE_NAME
```
### reset
```bash
git reset --hard COMMIT_SHA    # 完全撤銷commit，刪除改動
git reset --soft COMMIT_SHA    # 撤銷上一個commit，保留改動
git reset --mixed COMMIT_SHA   # 撤銷commit並保留改動（不進入暫存區）
git reset HEAD FILE_NAME       # 撤銷已暫存的文件
```
### Discard local changes
```bash
git checkout COMMIT_SHA -- FILE_NAME
```
### .gitignore file to ignore track
```bash
*.png   # 忽略所有 .png 文件
```

# 3. branch commands
### git branch
```bash
git branch                     # list branchs
git branch BRANCH_NAME         # create branch
git branch -d BRANCH_NAME      # delete branch
git branch -M main             # create main branch
```
### switch branch
```bash
git checkout -b BRANCH_NAME    # create branch and switch
git checkout main
git checkout HEAD FILE_NAME
```
### git merge
```bash
git merge BRANCH_NAME
```

# 4. remote command
### git clone
```bash
git clone https://github.com/benson1231/git_test.git
```
### get remote information
```bash
git remote -v                       # 查看遠程repo
git remote add origin REPO_NAME     # 添加遠程repo
git remote remove REPO_NAME         # 移除遠程repo
```
### git push
```bash
git push origin BRANCH_NAME         # 推送到遠程repo
git push origin --tags              # 推送本地標籤到遠程
```
### git pull
```bash
git pull origin BRANCH_NAME         # 從遠程倉庫拉取最新內容並自動合併到當前分支
```
### git fetch
```bash
git fetch                           # 從遠程倉庫獲取最新的提交歷史與分支更新，但不更新本地工作區
```

# 5. advance commands
### Save changes temporarily
```bash
git stash
```
### Apply the last stashed changes
```bash
git stash apply
```
### Garbage collection
```bash
git gc
```
### Remove untracked files
```bash
git clean -f
```
