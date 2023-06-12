FROM python:3.10-slim

ARG DEBIAN_FRONTEND=noninteractive
ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

# Creating working directory
WORKDIR /app/backend/
# Set timezone
RUN echo "Asia/Dhaka" > /etc/timezone

#COPY . .
#CMD ["tail", "-f", "/dev/null"]
# Copy requirements files
COPY requirements.txt /app/backend/

# Install project dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
            build-essential \
            tzdata \
            python3-pip \
            python3-dev \
    && pip3 install --no-cache-dir \
            -r requirements.txt \
    && apt-get remove build-essential -y \
    && apt-get autoremove -y

# Copy project files
COPY . /app/backend/
ENTRYPOINT ["sh", "entrypoint.sh"]