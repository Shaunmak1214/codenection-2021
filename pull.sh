branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

echo ===================================================
echo Pulling from $branch ...
echo ===================================================
git pull origin ${branch}