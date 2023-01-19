# [Choice] Debian OS version (use bullseye on local arm64/Apple Silicon): bullseye, buster
ARG VARIANT="3.1-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/jekyll:${VARIANT}

# [Choice] Node.js version: none, lts/*, 16, 14, 12, 10
ENV GEM_HOME=/tmp \
    GEM_PATH=$GEM_HOME;$GEM_PATH \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US:en \
    TZ=Etc/UTC \
    LC_ALL=en_US.UTF-8 \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US

ARG NODE_VERSION="none"
RUN if [ "${NODE_VERSION}" != "none" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

ADD post-start.sh /
